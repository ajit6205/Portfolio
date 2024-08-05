import styles from "./Service.module.css";
import services_data from "../assets/Service_data";
import { CgArrowLongRight } from "react-icons/cg";

const Services = () => {
  return (
    <div id="services" className={styles.services}>
      <div className={styles.servicesTitle}>
        <h1>My Services</h1>
        <img src="" alt="" />
      </div>
      <div className={styles.servicesContainer}>
        {services_data.map((services, index) => {
          return (
            <div key={index} className={styles.servicesFormate}>
              <h3>{services.s_no} </h3>
              <h2>{services.s_name}</h2>
              <p>{services.s_desc}</p>
              <div className={styles.servicesReadmore}>
                <p>Read More</p>
                <p>
                  <CgArrowLongRight />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Services;
