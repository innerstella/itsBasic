import { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { ContentContext } from "../../PostMessagePage";

/**
 *
 * @description TextEditor 컴포넌트는 글을 작성하는 에디터입니다.
 * @ref [ReactQuill](https://www.npmjs.com/package/react-quill)
 * @ref [ReactQuill 사용하기](https://velog.io/@stakbucks/React-Quill-WYSIWYG-%EC%97%90%EB%94%94%ED%84%B0-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
 * @todo 에디터 기능 연결
 */
const TextEditor = () => {
  const { contentRef } = useContext(ContentContext);
  const [quillValue, setQuillValue] = useState("");

  const handleQuillChange = (content, delta, source, editor) => {
    setQuillValue(editor.getContents());
  };

  const modules = {
    toolbar: {
      container: [
        ["image"],
        [{ header: [1, 2, 3, 4, 5, false] }],
        ["bold", "underline"],
      ],
    },
  };

  return (
    <>
      <ReactQuill
        modules={modules}
        value={quillValue || ""}
        onChange={handleQuillChange}
        ref={contentRef}
      />
    </>
  );
};

export default TextEditor;
