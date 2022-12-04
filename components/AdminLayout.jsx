const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-green-1">
      <div className="min-h-screen ">{children}</div>
    </div>
  );
};

export default Layout;
