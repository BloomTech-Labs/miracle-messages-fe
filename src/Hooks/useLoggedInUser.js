import { useState, useEffect } from "react";

export const useLoggedInUser = () => {
  const [user, setUser] = useState({});
  const token = JSON.parse(localStorage.getItem("okta-token-storage"));

  useEffect(() => {
    if (!token) return;

    if (token.accessToken) {
      const {
        accessToken: { accessToken },
      } = token;
      // const idPayload = idToken.split('.')[1]
      const accessPayload = accessToken.split(".")[1];

      //decode tokens from base64 Url encoded to ascii string
      // const decodedIdPayload = JSON.parse(Buffer.from(idPayload, "base64").toString("ascii"))
      const decodedAccessPayload = JSON.parse(
        Buffer.from(accessPayload, "base64").toString("ascii")
      );

      //pull email, firstname, lastname off decoded ID token
      // const { email } = decodedIdPayload
      // const { name } = decodedIdPayload
      // const firstName = name.split(' ')[0]
      // const lastName = name.split(' ')[1]

      //pull oktaId off decoded access token
      console.log("hook running");
      console.log(decodedAccessPayload);
      const { uid } = decodedAccessPayload;

      setUser({
        uid,
        // email,
        // name,
        // firstName,
        // lastName
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user;
};
