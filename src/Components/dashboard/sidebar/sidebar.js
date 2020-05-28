import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Sidebar.scss'

import { useUserGroups } from '../../../utils/customHooks/useUserGroups';


const Sidebar = ({ setSideBarOpen, sideBarOpen }) => {
  const { admin, chapterLeaders, volunteer } = useUserGroups();
  const { push } = useHistory();
  const { pathname } = useLocation();

    return (
        <div className={sideBarOpen ? "sidebar" : "sidebar hidden"}>
          <div className={pathname.includes("admin/chapters") ? "active-tab" : ""} onClick={() => push("/admin/chapters")}><i className="fas fa-building"></i><div>Chapters</div></div>
          {/* only for admins */}
          <div className={pathname.includes("admin/pending") ? "active-tab" : ""} onClick={() => push("/admin/pending")}><i className="fas fa-wrench"></i><div>Pending</div></div>
          <div className={pathname.includes("admin/Sponsors") ? "active-tab" : ""} onClick={() => push("/admin/Sponsors")}><i className="fas fa-hands-helping"></i><div>Sponsors</div></div>
          <div className={pathname.includes("admin/volunteers") ? "active-tab" : ""} onClick={() => push("/admin/volunteers")}><i className="fas fa-users"></i><div>Volunteers</div></div>
          <div onClick={() => setSideBarOpen(false)}><i className="fas fa-times"></i><div>Close</div></div>
        </div>
    )
}

export default Sidebar;