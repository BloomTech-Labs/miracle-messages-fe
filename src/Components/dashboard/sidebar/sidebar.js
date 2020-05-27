import React from 'react';
import { useHistory } from 'react-router-dom';
import './sidebar.scss'

import { useUserGroups } from '../../../utils/customHooks/useUserGroups';


const Sidebar = ({ setSideBarOpen, sideBarOpen }) => {
  const { admin, chapterLeaders, volunteer } = useUserGroups();
  const { push } = useHistory();

    return (
        <div className={sideBarOpen ? "sidebar" : "sidebar hidden"}>
          <div onClick={() => push("/admin/chapters")}><i className="fas fa-building"></i><div>Chapters</div></div>
          {/* only for admins */}
          <div onClick={() => push("/admin/pending")}><i className="fas fa-wrench"></i><div>Pending</div></div>
          <div onClick={() => push("/admin/Sponsors")}><i className="fas fa-hands-helping"></i><div>Sponsors</div></div>
          <div onClick={() => push("/admin/volunteers")}><i className="fas fa-users"></i><div>Volunteers</div></div>
          <div onClick={() => setSideBarOpen(false)}><i className="fas fa-times"></i><div>Close</div></div>
        </div>
    )
}

export default Sidebar;