import styles from "./MyWork.module.css";
const MyWork = () => {
  return (
    <div id="work" className={styles.myWork}>
      <div className={styles.myWorkTitle}>
        <h1>My latest work</h1>
        <img src="" alt="" />
      </div>
      <div className={styles.myWorkContainer}></div>
    </div>
  );
};
export default MyWork;
