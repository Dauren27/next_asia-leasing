import React from "react";
import styles from "./catalog.module.scss";
import catalog1 from "../../assets/images/catalog1.png";
import catalog2 from "../../assets/images/catalog2.png";
import catalog3 from "../../assets/images/catalog3.png";
import Button from "../UI/Button/Button";
import Link from "next/link";
import Image from "next/image";

const Catalog = () => {
  return (
    <div className={styles.catalog} id="catalog">
      <h2>Каталоги</h2>
      <div className={styles.catalog__items}>
        <div className={styles.catalog_item}>
          <h3>Каталог нового автомобиля</h3>
          <Image src={catalog1} alt="Catalog Image" width={0} height={0} />
          <Link href="/cars/category/new">
            <button>Подробнее</button>
          </Link>
        </div>
        <div className={styles.catalog_item}>
          <h3>Каталог на машину с пробегом</h3>
          <Image src={catalog2} alt="Catalog Image" width={0} height={0} />
          <Link href="/cars/category/used">
            <button>Подробнее</button>
          </Link>
        </div>
        <div className={styles.catalog_item}>
          <h3>Заказать машину</h3>
          <Image src={catalog3} alt="Catalog Image" width={0} height={0} />
          <Button style={{ marginTop: "0" }}>Подробнее</Button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
