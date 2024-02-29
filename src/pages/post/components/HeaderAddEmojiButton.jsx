import * as S from "./HeaderAddEmojiButton.style";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import styled from "./HeaderAddEmojiButton.module.css";
import DropdownClickCancel from ".//DropdownClickCancel";

function HeaderAddEmojiButton() {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);

  return (
    <div className={styled["emoji-toggle-btn-container"]}>
      <button
        className={styled["emoji-picker-toggle-btn-in-post"]}
        onClick={() => setIsEmojiOpen(!isEmojiOpen)}
      >
        <img
          src='assets/post/icons/add-24.svg'
          alt='meaninglessDumbIcons'
          className={styled["emoji-picker-toggle-btn-in-post-icon"]}
        />
        추가
      </button>
      <section className={styled["emoji-picker-position-container"]}>
        {isEmojiOpen && <EmojiPicker emojiStyle='twitter' />}
      </section>
      <DropdownClickCancel isOpen={isEmojiOpen} setIsOpen={setIsEmojiOpen} />
    </div>
  );
}

export default HeaderAddEmojiButton;
