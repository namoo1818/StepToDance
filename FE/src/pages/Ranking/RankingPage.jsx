import styles from "./RankingPage.module.css";
import RankingList from "./components/RankingList";

const RankingPage = () => {
  return (
    <section className={styles["rank-page"]}>
      <p className={styles["rank-title"]}>Ranking</p>
      <article className={styles["rank-content"]}>
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
        <RankingList />
      </article>
    </section>
  );
};

export default RankingPage;
