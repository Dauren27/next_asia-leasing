import styles from "./page.module.scss";

export default function About() {
  return (
    <div>
      <div className={styles.about}>
        <div className={styles.about__headers}>
          <h2>О нашей компании</h2>
        </div>
        <h3>Какая-то информация про компанию и лизинг</h3>
      </div>
    </div>
  );
}
