import styles from "./Navbar.module.css";
import logo from "../assets/ajit.png";
import { useState, useRef } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuRef = useRef(null);
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className={styles.Navbar}>
      <img src={logo} alt="" />
      <p>
        <CiMenuBurger onClick={openMenu} className={styles.navMovOpen} />
      </p>
      <ul ref={menuRef} className={styles.navMenu}>
        <p>
          <IoMdClose onClick={closeMenu} className={styles.navMobClose} />
        </p>
        <li>
          {" "}
          <a className={styles.anchorLink} href="#home">
            {" "}
            <p onClick={() => setMenu("home")}>Home</p>
          </a>{" "}
          {menu === "" ? <img src="" alt="" /> : <></>}{" "}
        </li>
        <li>
          {" "}
          <a className={styles.anchorLink} offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About me</p>
          </a>{" "}
          {menu === "" ? <img src="" alt="" /> : <></>}{" "}
        </li>
        <li>
          {" "}
          <a className={styles.anchorLink} offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </a>{" "}
          {menu === "" ? <img src="" alt="" /> : <></>}{" "}
        </li>
        <li>
          {" "}
          <a className={styles.anchorLink} offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </a>{" "}
          {menu === "" ? <img src="" alt="" /> : <></>}{" "}
        </li>
        <li>
          {" "}
          <a className={styles.anchorLink} offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </a>{" "}
          {menu === "" ? <img src="" alt="" /> : <></>}{" "}
        </li>
      </ul>
      <div className={styles.navConnect}>
        <a className={styles.anchorLink} offset={50} href="#contact">
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
