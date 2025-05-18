import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-pink-400 p-6">
        <h1>Sign up</h1>
        <form className="">
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button>signup</button>
          <p>
            allready have an account? <Link href="/signin">login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
