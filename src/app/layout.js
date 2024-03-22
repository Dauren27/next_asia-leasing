import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import styles from "./layout.module.scss";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const metadata = {
  title: "Asia Leasing - Автолизинг в Бишкеке на выгодных условиях",
  description:
    "Лизинговая компания предлагает широкий выбор автомобилей в лизинг на выгодных условиях.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head></Head>
      <html lang="ru">
        <body>
          <AppRouterCacheProvider>
            <div className={styles.main}>
              <div className={styles.container}>
                <div className={styles.main__content}>{children}</div>
              </div>
            </div>
          </AppRouterCacheProvider>
        </body>
      </html>
    </>
  );
}
