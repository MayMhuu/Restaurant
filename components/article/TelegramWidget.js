import React from "react";
import { SocialIcon } from "react-social-icons";

export default function TelegramWidget({ url }) {
  return <SocialIcon url={url} network="telegram" target="_blank" className="text-telegram"  style={{ height: 26, width: 26 }} />;
}
