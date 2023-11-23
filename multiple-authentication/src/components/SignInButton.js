import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 * Note the [useMsal] package 
 */

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.log(e);
      });
  };
  return (
<>
      <button onClick={() => handleLogin("redirect")}>
        Sign in using Microsoft
      </button>

</>
  );
};