import Home from "./pages/Home";
import Era from "./pages/Era";
import Playlist from "./pages/Playlist";

export const routes = {
  home: {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  era: {
    name: "Era",
    path: "/era",
    component: <Era />,
  },
  playlist: {
    name: "Playlist",
    path: "/playlist",
    component: <Playlist />,
  }
}