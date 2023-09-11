"use client";
import styles from "./style.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./body";
import Footer from "./Footer";
import Image from "./Image";

const links = [
  {
    title: "Home",
    href: "/",
    src: "home.png",
  },
  
  {
    title: "About Us",
    href: "/about",
    src: "about_us.png",
  },
  {
    title: "Services",
    href: "/services",
    src: "lookbook.png",
  },
  {
    title: "Contact",
    href: "/contact",
    src: "contact.png",
  },
];

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
        <Image
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
}
