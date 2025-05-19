"use client";
import { useState } from "react";
import { loginAction } from "@/actions";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const data = await loginAction(formData);
      if (data?.status !== 200) {
        setError(data);
      } else {
        router.push("/");
      }
      console.log(data);
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      {error && <p className="text-red-500">{error.message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
    </div>
  );
};

export default LoginForm;
