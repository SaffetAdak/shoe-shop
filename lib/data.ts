import React from "react";
import { LuUser } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { BsHandbag } from "react-icons/bs";

export const navLinks = [
  {
    id: "0",
    title: "Shoe Stop",
    url: "#",
  },
  {
    id: "1",
    title: "Catalog",
    url: "#catalog",
  },
  {
    id: "2",
    title: "Brands",
    url: "#brands",
  },
  {
    id: "3",
    title: "New Arrivals",
    url: "#new",
  },
] as const;

export const iconedNavLinks = [
  {
    id: "0",
    title: "Profile",
    url: "#profile",
    icon: React.createElement(LuUser),
  },
  {
    id: "1",
    title: "Favorites",
    url: "#favorites",
    icon: React.createElement(LuHeart),
  },
  {
    id: "2",
    title: "Bag",
    url: "#bag",
    icon: React.createElement(BsHandbag),
  },
] as const;
