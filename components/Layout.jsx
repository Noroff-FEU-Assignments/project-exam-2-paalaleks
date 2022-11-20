import Navigation from "../components/Navigation";

import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[url('/solar-pattern-dark.png')] bg-[length:40px_40px] bg-top">
      <Navigation />
      <div className="pb-[340px] min-h-screen ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
