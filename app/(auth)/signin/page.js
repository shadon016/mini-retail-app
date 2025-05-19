import React from "react";
import Link from "next/link";
import { loginAction } from "@/actions";
import LoginForm from "../_components/loginForm";
const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-purple-800 p-6">
        <h1>Sign In</h1>
        <LoginForm />
        <p>
          Dont have an account? <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
