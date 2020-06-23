import Cinema from "./cinema/index.vue";
import Mine from "./mine/index.vue";
import Movie from "./movie/index.vue";
import City from "../components/City/index.vue";
import ComingSoon from "../components/ComingSoon/index.vue";
import NowPlaying from "../components/NowPlaying/index.vue";
import Search from "../components/Search/index.vue";

export default [
  {
    path: "/",
    redirect: "/movie",
  },
  {
    path: "/movie",
    component: Movie,
    children: [
      {
        path:'/movie',
        redirect:'/movie/nowplaying'
      },
      {
        path: "city",
        component: City,
      },
      {
        path: "comingsoon",
        component: ComingSoon,
      },
      {
        path: "nowplaying",
        component: NowPlaying,
      },
      {
        path: "search",
        component: Search,
      },
    ],
  },
  {
    path: "/cinema",
    component: Cinema,
  },
  {
    path: "/mine",
    component: Mine,
  },
];
