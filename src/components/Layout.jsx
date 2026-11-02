import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import { LogoSymbol } from "./Logo.jsx";

export default function Layout({ active, children }) {
  return (
    <>
      <LogoSymbol />
      <Header active={active} />
      <main id="contenuto">{children}</main>
      <Footer />
    </>
  );
}
