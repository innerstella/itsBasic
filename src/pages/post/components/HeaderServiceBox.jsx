import styles from "./HeaderServiceBox.module.css";
import MessageWriterBox from "./MessageWriterBox";
import MostEmojiBox from "./MostEmojiBox";
import HeaderButtonBox from "./HeaderButtonBox";

const HeaderServiceBox = () => {
	return (
		<div className={styles["wrapper"]}>
			<MessageWriterBox />
			<MostEmojiBox />
			<HeaderButtonBox />
		</div>
	);
};

export default HeaderServiceBox;
