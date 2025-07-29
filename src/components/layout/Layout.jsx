import Header from "./Header";
import Footer from "./Footer";
import Loader from "../Loader";

export default function Layout({ children }) {
  return (
    <>
    <Loader /> {/* This will show first */}

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}