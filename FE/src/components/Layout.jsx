import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styles from "../styles/Layout.module.css";
import SideBar from "./SideBar";
const Layout = () => {
  return (
    <section className={styles.layout}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.mainContent}>
        <Outlet /> {/* Main page content will render here */}
        <Footer />
      </div>
    </section>
  );
};


export default Layout;
