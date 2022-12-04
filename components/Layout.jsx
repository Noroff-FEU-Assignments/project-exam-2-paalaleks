import Navigation from "../components/Navigation";

import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[url('/solar-pattern.png')] bg-[length:30px_30px] bg-bottom bg-[#85c885]">
      <Navigation />
      <div className="md:pb-[340px] pb-[600px] min-h-screen ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
