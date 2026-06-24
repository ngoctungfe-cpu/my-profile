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
    url: "https://www.facebook.com/lee.tungxb/",
  },

  {
    title: "TikTok",
    icon: FaTiktok,
    url: "https://www.tiktok.com/@ngtung01",
  },

  {
    title: "Zalo",
    icon: BsChatDotsFill,
    url: "https://zalo.me/0383156537",
  },

  {
    title: "Email",
    icon: Mail,
    url: "mailto:ngoctung.fe@gmail.com",
  },

  {
    title: "Phone",
    icon: Phone,
    url: "tel:+84383156537",
  },

  {
    title: "Website",
    icon: Globe,
    url: "https://my-profile-two-xi.vercel.app",
  },
];