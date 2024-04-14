import Navbar from "@/components/Navbar/Navbar";
import styles from "./not-found.module.scss";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.error}>
      <Navbar/>
      <Breadcrumbs
        links={[{ path: ``, name: "Страница ошибки" }]}
      />
      <h2>Ошибка 404</h2>
      <h3>Страницы не существует</h3>
      <Link href="/" className={styles.link}>⇐ Перейти на главную страницу</Link>
    </div>
  );
}
