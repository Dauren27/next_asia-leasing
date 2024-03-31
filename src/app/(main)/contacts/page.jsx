import Image from "next/image";
import styles from "./page.module.scss";
import { BsPhone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <Breadcrumbs links={[{ path: `/contacts`, name: "Контакты" }]} />
      <div className={styles.contacts__headers}>
        <h2>Контакты</h2>
      </div>
      <div className={styles.contacts__content}>
        <div className={styles.contacts__info}>
          <div className={styles.contacts__item}>
            <BsPhone />
            <h3>+996 702 271 103</h3>
          </div>
          <div className={styles.contacts__item}>
            <FiMail />
            <h3>asia_leasing@gmail.com</h3>
          </div>
          <div className={styles.contacts__item}>
            <MdLocationOn />
            <h3>г. Бишкек, ул. Советская 452а</h3>
          </div>
          {/* <div className={styles.contacts__socialNet}>
            <a href="https://twitter.com/?lang=ru" targer="_blank">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="https://www.facebook.com/" targer="_blank">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/" targer="_blank">
              <i class="bx bxl-instagram-alt"></i>
            </a>
          </div> */}
        </div>
        <div className={styles.contacts__img}>
          {/* <Image
            src="https://lstkclub.ru/wp-content/uploads/2019/08/28-low-res.jpg"
            alt="Contacts Image"
            width={500}
            height={330}
          /> */}
        </div>
      </div>
    </div>
  );
}
