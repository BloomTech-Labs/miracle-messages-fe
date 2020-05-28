import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Sidebar from '../sidebar/Sidebar.js';
import { useUserGroups } from '../../../utils/customHooks/useUserGroups';


const FullLayout = props => {
    const history = useHistory();
    const { admin, chapterLeaders, volunteer } = useUserGroups();







    return (
      <div
        id="main-wrapper"
        data-theme="light"
        data-layout="vertical"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
        data-boxed-layout="full"
      >
            <Sidebar />
      </div>
    );
}
export default FullLayout;
