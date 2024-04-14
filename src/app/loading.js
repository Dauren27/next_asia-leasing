import styles from "./loading.module.scss";
import Image from "next/image";
import icon from "../assets/icons/icon.png";

export default function loading() {
  return (
    <div className={styles.loading}>
      <Image src={icon} alt="Asia Leasing" width={160} height={100} />
    </div>
  );
}
