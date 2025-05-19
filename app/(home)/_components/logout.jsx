import React from "react";
import { logoutAction } from "@/actions";

const Logout = () => {
  return (
    <div>
      <form action={logoutAction}>
        <button type="submit">logout</button>
      </form>
    </div>
  );
};

export default Logout;
