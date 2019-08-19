import Volunteers from '../views/Volunteers.js';
import Chapters from '../views/Chapters.js';
import Sponsors from '../views/Sponsors/Sponsors.js';

let ThemeRoutes = [
  {
    path: '/admin/chapters',
    name: 'Chapters',
    icon: 'fas fa-building',
    component: Chapters
  },
  {
    path: '/admin/volunteers',
    name: 'Volunteers',
    icon: 'fas fa-users',
    component: Volunteers
  },

  {
    path: '/admin/sponsors',
    name: 'Sponsors',
    icon: 'fas fa-hands-helping',
    component: Sponsors
  },
  // {
  //   path: '/admin/dashboard',
  //   name: 'Dashboard',
  //   icon: 'fas fa-tachometer-alt',
  //   component:
  // },
  {
    path: '/admin',
    pathTo: 'admin/chapters',
    name: 'Chapters',
    redirect: true
  }
];
export default ThemeRoutes;
