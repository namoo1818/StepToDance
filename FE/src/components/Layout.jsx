import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styles from "../styles/Layout.module.css";

const Layout = () => {
  return (
    <section className={styles["layout"]}>
      <Outlet />
      <Footer />
    </section>
  );
};

export default Layout;
