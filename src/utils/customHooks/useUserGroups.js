import { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

export function useUserGroups() {
  // const [isOnline, setIsOnline] = useState(null);
  // const { authState } = useOktaAuth();

  // useEffect(() => {

  //     JSON.parse(atob(authState.accessToken.split('.')[1])).groups.includes('Admin')
  //   });

  // ...
  // const admin = JSON.parse(atob(authState.accessToken.split('.')[1])).groups.includes('Admin')
  // const chapterLeaders = JSON.parse(atob(authState.accessToken.split('.')[1])).groups.includes('Chapter Leaders')
  // const volunteer = JSON.parse(atob(authState.accessToken.split('.')[1])).groups.includes('Volunteer')
  const admin = "admin";
  // return {admin, chapterLeaders, volunteer};
  return { admin };
}
