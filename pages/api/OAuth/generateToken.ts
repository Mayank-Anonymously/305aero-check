import React from "react";
import { saveState } from "../../../utils/localstorage";

const generateToken = () => {
  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: "false",
  };

  fetch(
    "https://api.ingrammicro.com:443/oauth/oauth30/token?grant_type=client_credentials&client_id=SfGb7LenN6SazVajNzLKde429jDjCmRd&client_secret=f8dJJjW2M6Zuajom",
    options
  )
    .then((response: Response) => response.json())
    .then((response: any) => console.log(response.access_token, "token"))
    .catch((err: Error) => console.error(err));
  return;
};

export default generateToken;
