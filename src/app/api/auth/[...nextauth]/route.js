import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/Google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/Utils/db";
import bcrypt from "bcryptjs";
import User from "@/models/User";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      async authorize(credentials) {
        await connect();

        try {
          const user = await User.findOne({ email: credentials?.email });

          if (user) {
            const passwordMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (passwordMatch) {
              return user;
            } else {
              throw new Error("Incorrect Password");
            }
          } else {
            throw new Error("No such user found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
