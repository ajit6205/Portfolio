import styles from "./About.module.css";
import profile_img from "../assets/ajit1.png";

const About = () => {
  return (
    <div id="about" className={styles.About}>
      <div className={styles.aboutTitle}>
        <h1> About me</h1>
        <img src="" alt="" />
      </div>
      <div className={styles.aboutSection}>
        <div className={styles.aboutLeft}>
          <img src={profile_img} alt="" />
        </div>
        <div className={styles.aboutRight}>
          <div className={styles.para}>
            <p>
              As a passionate web developer, I specialize in crafting intuitive
              and responsive websites that captivate users. With expertise in
              HTML, CSS, JavaScript,React js and modern frameworks, I turn
              creative concepts into dynamic digital experiences. My approach
              combines clean code with cutting-edge design, ensuring both
              functionality and aesthetics.
            </p>
            <p>
              I have successfully launched 10+ projects, ranging from
              dynamic e-commerce platforms to interactive web applications, each
              showcasing my skills in HTML, CSS, JavaScript, and modern
              frameworks like React and Vue.js.
            </p>
          </div>
          <div className={styles.aboutSkills}>
            <div className={styles.aboutSkill}>
              <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
            </div>
            <div className={styles.aboutSkill}>
              <p>JavaScript</p> <hr style={{ width: "65%" }} />
            </div>
            <div className={styles.aboutSkill}>
              <p>React Js</p> <hr style={{ width: "60%" }} />
            </div>
            <div className={styles.aboutSkill}>
              <p>JAVA </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className={styles.aboutSkill}>
              <p>BootStrap</p> <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutAchievements}>
        <div className={styles.aboutAchievement}>
          <h1> 1.5+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className={styles.aboutAchievement}>
          <h1> 10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className={styles.aboutAchievement}>
          <h1>4+</h1>
          <p>COLLEGE PROJECTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
