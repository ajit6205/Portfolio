import styles from "./Hero.module.css";
import profile_img from "../assets/ajit1.png";

const Hero = () => {
  return (
    <div id="home" className={styles.Hero}>
      <img src={profile_img} alt="" />
      <h1>
        {" "}
        <span>I'm Ajit Kumar,</span> Web Developer based in India
      </h1>
      <p>
        Hi I’m Ajit Kumar, an innovative web developer with a flair for crafting
        stunning and high-performance websites that captivate audiences and
        drive results.My work is recognized for its blend of creative design,
        technical excellence, and strategic thinking.
      </p>
      <div className={styles.heroAction}>
        <div className={styles.heroConnect}>
          <a className={styles.anchorLink} offset={50} href="#contact">
            Connect with me
          </a>
        </div>
        <div className={styles.resume}>My resume</div>
      </div>
    </div>
  );
};
export default Hero;
