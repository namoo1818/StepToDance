import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styles from "../styles/Layout.module.css";
import SideBar from "./SideBar";
import logo from "../assets/images/LOGO.png";
import ShootingStar from "./ShootingStar";

const Layout = () => {
  return (
    <section className={styles.layout}>
      {/* <ShootingStar /> */}
      <img src={logo} className={styles.logoimg} />
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
