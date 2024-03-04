import { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { ContentContext } from "../../PostMessagePage";

/**
 *
 * @description TextEditor 컴포넌트는 글을 작성하는 에디터입니다.
 * @ref [ReactQuill](https://www.npmjs.com/package/react-quill)
 * @todo 에디터 기능 연결
 */
const TextEditor = () => {
  const { contentInput, setContentInput } = useContext(ContentContext);
  const [quillValue, setQuillValue] = useState("");

  const handleQuillChange = (content, delta, source, editor) => {
    setQuillValue(editor.getContents());
  };

  useEffect(() => {
    if (quillValue) {
      setContentInput(quillValue?.ops[0]?.insert);
    }
  }, [quillValue, setContentInput]);

  return (
    <>
      <ReactQuill value={quillValue || ""} onChange={handleQuillChange} />
    </>
  );
};

export default TextEditor;
