"use client";
import React from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="p-6 flex items-center justify-between fixed bottom-0 w-full bg-[#C08261]">
      <div className="flex items-center space-x-1">
        <div className="text-[#FCF5ED] text-sm selection:bg-yellow-400 selection:text-black">
          @ 2023 Masih Pemula. All rights reserved.
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div className="group">
          <TwitterIcon
            size={36}
            borderRadius={16}
            className="group-hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="group">
          <FacebookIcon
            size={36}
            borderRadius={16}
            className="group-hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="group">
          <PinterestIcon
            size={36}
            borderRadius={16}
            className="group-hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="group">
          <LineIcon
            size={36}
            borderRadius={16}
            className="group-hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="group">
          <RedditIcon
            size={36}
            borderRadius={16}
            className="group-hover:scale-125 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
