import styles from "./PostPageMain.module.css";
import { PostCardAdd } from "./postCard/PostCardAdd";
import { PostCardItem } from "./postCard/PostCardItem";

const PostPageMain = () => {
  return (
    <div className={styles["post-main-wrapper"]}>
      <div className={styles["post-card-grid-container"]}>
        <PostCardAdd />
        <PostCardItem />
      </div>
    </div>
  );
};

export default PostPageMain;
