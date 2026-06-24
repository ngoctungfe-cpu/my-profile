import { Mail, Phone, Globe } from "lucide-react";

import {
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

import {
  BsChatDotsFill,
} from "react-icons/bs";

export const profile = {
  name: "Đào Tùng",

  title: "IT Solutions Consultant",

  subtitle:
    "Business Development • Keyboard Reviewer • Content Creator",

  avatar: "/avatar.jpg",
};

export const links = [
  {
    title: "Facebook",
    icon: FaFacebook,
    url: "https://facebook.com/yourfacebook",
  },

  {
    title: "TikTok",
    icon: FaTiktok,
    url: "https://www.tiktok.com/@yourtiktok",
  },

  {
    title: "Zalo",
    icon: BsChatDotsFill,
    url: "https://zalo.me/xxxxxxxx",
  },

  {
    title: "Email",
    icon: Mail,
    url: "mailto:yourmail@gmail.com",
  },

  {
    title: "Phone",
    icon: Phone,
    url: "tel:+84901234567",
  },

  {
    title: "Website",
    icon: Globe,
    url: "https://yourwebsite.com",
  },
];