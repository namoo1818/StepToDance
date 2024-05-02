import { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [currentBox, setCurrentBox] = useState(1);

  useEffect(() => {
    let timeout;
    if (isClicked) {
      timeout = setTimeout(() => {
        if (currentBox < 10) {
          setCurrentBox((prev) => prev + 1);
        }
        const select = document.querySelector(`#box${currentBox}`);
        select.style.display = "none";
      }, 300);
    }
    return () => clearTimeout(timeout);
  }, [isClicked, currentBox]);
  const clickHandler = () => {
    setIsClicked(!isClicked);
  };
  return (
    <section
      className={
        isClicked ? styles["landing-page-click"] : styles["landing-page"]
      }
      onClick={clickHandler}
    >
      <div className={styles.first}>
        <div
          id="box1"
          className={isClicked ? styles["box1"] : styles["first-box"]}
        ></div>
        <div
          id="box2"
          className={isClicked ? styles["box2"] : styles["second-box"]}
        ></div>
        <div
          id="box3"
          className={isClicked ? styles["box3"] : styles["third-box"]}
        ></div>
        <div
          id="box4"
          className={isClicked ? styles["box4"] : styles["fourth-box"]}
        ></div>
        <div
          id="box5"
          className={isClicked ? styles["box5"] : styles["fifth-box"]}
        ></div>
        <div
          id="box6"
          className={isClicked ? styles["box6"] : styles["sixth-box"]}
        ></div>
        <div
          id="box7"
          className={isClicked ? styles["box7"] : styles["seventh-box"]}
        ></div>
        <div
          id="box8"
          className={isClicked ? styles["box8"] : styles["eighth-box"]}
        ></div>
        <div
          id="box9"
          className={isClicked ? styles["box9"] : styles["ninth-box"]}
        ></div>
        <div
          id="box10"
          className={isClicked ? styles["box10"] : styles["tenth-box"]}
        ></div>
      </div>
      {!isClicked && <span className={styles["intro"]}>Click Anywhere</span>}
    </section>
  );
};

export default LandingPage;
