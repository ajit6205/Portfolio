import styles from "./Footer.module.css";
import { RiUserLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopLeft}>
          <img src="" alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur obcaecati, voluptatibus
            pariatur expedita eaque voluptate illum recusandae. Quidem,
            doloribus quisquam ullam in dicta delectus impedit alias voluptas
            eos iusto.
          </p>
        </div>
        <div className={styles.footerTopRight}>
          <div className={styles.footerEmailInput}>
            <RiUserLine />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className={styles.footerSubscribe}>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className={styles.footerBottom}>
        <p className={styles.footerBottomLeft}>© 2024 Ajit Kumar, All right</p>
        <div className={styles.footerBottomRight}>
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
