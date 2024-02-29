import styles from "./MostEmojiBox.module.css";

const reactionEmojiListAll = [
	{ emoji: "👍", count: 24 },
	{ emoji: "😍", count: 16 },
	{ emoji: "🎉", count: 10 },
	{ emoji: "😂", count: 20 },
	{ emoji: "🥰", count: 25 },
	{ emoji: "🙄", count: 45 },
	{ emoji: "😫", count: 4 },
	{ emoji: "🤐", count: 10 },
	{ emoji: "🤐", count: 9 },
];

const MostEmojiBox = () => {
	const reactionEmojiList = reactionEmojiListAll
		.sort((a, b) => b.count - a.count)
		.filter((item, i) => i < 8);
	const mostUsedEmoji = reactionEmojiList.filter((item, i) => i < 3);

	return (
		<>
			<div className={styles["main-wrapper"]}>
				{mostUsedEmoji.map((item) => (
					<div key={item.emoji} className={styles["most-emoji-box"]}>
						<p className={styles["most-emoji"]}>{item.emoji}</p>
						<p className='font-16-regular'>{item.count}</p>
					</div>
				))}
				<button className={styles["emoji-picker-dropdown-button"]}>
					<img src='/assets/emoji_picker_dropdown_icon.svg' />
				</button>
			</div>
		</>
	);
};

export default MostEmojiBox;
