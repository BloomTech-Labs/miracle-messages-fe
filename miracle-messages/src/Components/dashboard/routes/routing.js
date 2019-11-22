import Volunteers from "../views/Volunteers.js";
import Chapters from "../views/Chapters/Chapters.js";
import Sponsors from "../views/Sponsors/Sponsors.js";
import ChapterCard from "../views/Chapters/ChapterCard";

let ThemeRoutes = [
  {
    path: "/admin/chapters",
    name: "Chapters",
    icon: "fas fa-building",
    component: Chapters
  },
  {
    path: "/admin/Sponsors",
    name: "Sponsors",
    icon: "fas fa-hands-helping",
    component: Sponsors
  },
  {
    path: "/admin/volunteers",
    name: "Volunteers",
    icon: "fas fa-users",
    component: Volunteers
  },

  {
    path: "/admin/chapters/:id",
    component: ChapterCard
  },
  {
    path: "/admin",
    pathTo: "/admin/chapters",
    name: "Chapters",
    redirect: true
  }
];
export default ThemeRoutes;
