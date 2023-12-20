import { GoLightBulb, GoBook } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";

export const navLinks = [
  {
    section: "generate",
    icon: <GoLightBulb className="text-neutral-700 dark:text-neutral-300" />,
    label: "generate",
  },
  {
    section: "library",
    icon: <GoBook className="text-neutral-700 dark:text-neutral-300" />,
    label: "library",
  },
  {
    section: "favorite",
    icon: <FaRegHeart className="text-neutral-700 dark:text-neutral-300" />,
    label: "favorite",
  },
];
