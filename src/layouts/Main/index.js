import Footer from "../Footer";
import Header from "../Header";

const MainLayout = ({ children }) => {
  return (
    <div className="page-wrap">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
