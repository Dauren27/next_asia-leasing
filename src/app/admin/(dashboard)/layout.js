import Navbar from "@/components/admin/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
