import styles from "./Contact.module.css";
import { CgMail } from "react-icons/cg";
import { MdAddIcCall } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "06887e69-e1b5-48e3-b971-0651319457c6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.contactTitle}>
        <h1>Get in touch</h1>
        <img src="" alt="" />
      </div>
      <div className={styles.contactSection}>
        <div className={styles.contactLeft}>
          <h1>Let's talk</h1>
          <p>
            Lorem adipisicing elit. Enim ullam perspiciatis obcaecati natus sit,
            molestiae aliquam provident et harum aspernatur expedita!
            Dignissimos laudantium ipsa voluptatum eligendi autem deleniti
            temporibus unde?
          </p>
          <div className={styles.contactDetails}>
            <div className={styles.contactDetail}>
              <CgMail className={styles.contactDetailIcon} />{" "}
              <p>rajajit2746@gmail.com</p>
            </div>
            <div className={styles.contactDetail}>
              <MdAddIcCall className={styles.contactDetailIcon} />{" "}
              <p>+91-6205384086</p>
            </div>
            <div className={styles.contactDetail}>
              <ImLocation2 className={styles.contactDetailIcon} />{" "}
              <p>Patna, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className={styles.contactRight}>
          <label htmlFor="">Your name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className={styles.contactSubmit}>
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
