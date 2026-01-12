"use client";

import { useState } from "react";
import Login from "../app/Login/page.js";

export default function LoginWrapper() {
  const [loginOpen, setLoginOpen] = useState(false);
  
  return (
    <>
      <Login isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
