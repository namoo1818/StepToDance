import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styles from "../styles/Layout.module.css";
import SideBar from "./SideBar";
const Layout = () => {
  return (
    <section className={styles["layout"]}>
      <Outlet />
      <div className={styles["sidebar"]}>
        <SideBar />
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
