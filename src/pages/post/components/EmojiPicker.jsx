import React, { useState } from "react";
import "react-emoji-picker/dist/index.css";
import { Picker } from "react-emoji-picker";

function EmojiPicker() {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const handleEmojiClick = (emoji) => {
    setChosenEmoji(emoji);
  };

  return (
    <div>
      <div style={{ width: "286.06px", height: "368.126px" }}>
        <h2>이모지를 선택해보세요:</h2>
        <Picker onEmojiClick={handleEmojiClick} />
        {chosenEmoji && (
          <div>
            <h3>선택된 이모지:</h3>
            <span>{chosenEmoji}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmojiPicker;
