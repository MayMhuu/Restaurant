import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import { useState } from "react";

export default function Contact({ contact }) {
  console.log("xx_contact_xxx", contact);
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <h1 className="text-2xl font-bold text-purple-500">Welcome Contact</h1>
    </div>
  );
}
