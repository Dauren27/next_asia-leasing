import { Providers } from "@/components/admin/Provider/Provider";
import StoreProvider from "@/libs/store/StoreProvider";

export default function RootLayout({ children }) {
  return (
    <Providers>
      <StoreProvider>
        <main>{children}</main>
      </StoreProvider>
    </Providers>
  );
}
