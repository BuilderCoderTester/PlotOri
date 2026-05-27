import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
function Layout({ children }) {
  return <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>;
}
export {
  Layout
};
