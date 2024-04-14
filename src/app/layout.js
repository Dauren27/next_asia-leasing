import "./globals.scss";
import Head from "next/head";
import styles from "./layout.module.scss";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Asia Leasing - Автолизинг в Бишкеке на выгодных условиях",
  description:
    "Лизинговая компания предлагает широкий выбор автомобилей в лизинг на выгодных условиях.",
  icons: {
    icon: "/icon.png",
  },
  keywords:
    "лизинг, авто бишкек, лизинг бишкек, азия лизинг, условия лизинга, asia leasing, авто кредит",
  author: "Asia Leasing. Азия лизинг",
  robots: "index, follow",
  language: "Russian",
  canonicalUrl: "https://next-asia-leasing.vercel.app",
  openGraph: {
    title: "Asia Leasing - Автолизинг в Бишкеке на выгодных условиях",
    description:
      "Лизинговая компания предлагает широкий выбор автомобилей в лизинг на выгодных условиях.",
    locale: "ru_RU",
    siteName: "Asia Leasing | Азия Лизинг",
    url: "https://next-asia-leasing.vercel.app",
    image: "/icon.png",
    type: "website",
  },
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head></Head>
      <html lang="ru">
        <body>
          <AppRouterCacheProvider>
            <div className={styles.main}>
              <ToastContainer
                toastClassName="toastContainerBox"
                position="top-center"
              />
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
