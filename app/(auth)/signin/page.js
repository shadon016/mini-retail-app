import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-red-400 p-6">
        <h1>Sign In</h1>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p>
          Dont have an account? <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
