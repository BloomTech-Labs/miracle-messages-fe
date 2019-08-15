import Starter from '../views/starter.js';
import Volunteers from '../views/Volunteers.js';
import Chapters from '../views/Chapters.js';

let ThemeRoutes = [
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    icon: 'fas fa-tachometer-alt',
    component: Starter
  },
  {
    path: '/admin/volunteers',
    name: 'volunteers',
    icon: 'fas fa-hands-helping',
    component: Volunteers
  },
  {
    path: '/admin/chapters',
    name: 'Chapters',
    icon: 'fas fa-building',
    component: Chapters
  },
  // {
  //   path: '/admin/admins',
  //   name: 'Admins',
  //   icon: 'fas fa-user-shield',
  //   component: Admins
  // },

  {
    path: '/admin',
    pathTo: 'admin/dashboard',
    name: 'Dashboard',
    redirect: true
  }
];
export default ThemeRoutes;
