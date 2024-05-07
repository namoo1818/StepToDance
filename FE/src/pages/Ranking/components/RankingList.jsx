import styles from "./RankingList.module.css";

const RankingList = () => {
  return (
    <div className={styles["ranking"]}>
      <span className={styles["ranking-rank"]}>1등</span>
      <span>김아무개</span>
      <span>9999점</span>
    </div>
  );
};

export default RankingList;
