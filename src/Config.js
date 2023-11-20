import {
  SunIcon,
  MoonIcon,
  StarIcon,
  CodeIcon,
} from "@heroicons/react/outline";

import { routes } from "./routes";

// app config

export const config = {
  title: "daisyUI",
  home: routes.home,
  pages: [routes.era, routes.playlist],
  themes: [
    {
      name: "Light",
      id: "retro",
      icon: <SunIcon className="h-6 w-6" />,
    },
    {
      name: "Dark",
      id: "dark",
      icon: <MoonIcon className="h-6 w-6" />,
    },
    {
      name: "Synthwave",
      id: "synthwave",
      icon: <CodeIcon className="h-6 w-6" />,
    },
  ],
  masonryColumns: {
    default: 4,
    960: 3,
    730: 2,
    500: 1,
  },
};
