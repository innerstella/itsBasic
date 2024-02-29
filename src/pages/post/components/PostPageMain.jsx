import styles from "./PostPageMain.module.css";
import DummyPostCard from "./DummyPostCard";

const PostPageMain = () => {
  return (
    <div className={styles["post-main-wrapper"]}>
      <div className={styles["post-card-grid-container"]}>
        <DummyPostCard />
        <DummyPostCard />
        <DummyPostCard />
        <DummyPostCard />
        <DummyPostCard />
        <DummyPostCard />
      </div>
    </div>
  );
};

export default PostPageMain;
