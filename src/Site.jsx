import Layout from "./components/Layout.jsx";
import { pageByKey } from "./pages.js";
import Home from "./pages/Home.jsx";
import Persone from "./pages/Persone.jsx";
import Bar from "./pages/Bar.jsx";
import Aziende from "./pages/Aziende.jsx";
import ChiSiamo from "./pages/ChiSiamo.jsx";
import Impatto from "./pages/Impatto.jsx";
import Privacy from "./pages/Privacy.jsx";

const COMPONENTS = {
  home: Home,
  persone: Persone,
  bar: Bar,
  aziende: Aziende,
  "chi-siamo": ChiSiamo,
  impatto: Impatto,
  privacy: Privacy,
};

// Una pagina del sito dentro intestazione e piè di pagina.
export default function Site({ page }) {
  const meta = pageByKey(page);
  const Page = COMPONENTS[meta.key];
  return (
    <Layout active={meta.nav}>
      <Page />
    </Layout>
  );
}
