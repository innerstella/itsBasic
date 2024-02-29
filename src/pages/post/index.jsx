import PostPageHeader from "./components/PostPageHeader";
import PostPageMain from "./components/PostPageMain";
import styles from "./components/PostPage.module.css";

const PostPage = () => {
  return (
    <div className={styles["post-page-wrapper"]}>
      <PostPageHeader />
      <PostPageMain />
    </div>
  );
};

export default PostPage;
