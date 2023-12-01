import Editor from "@monaco-editor/react";
import { useOutletContext } from "react-router-dom";
export default function EditorTab() {
  const [Lang] = useOutletContext();
  function preTextRemove(value) {
    const mText = document.querySelector(".monaco-text");
    if (value) {
      mText.style.display = "none";
    } else {
      mText.style.display = "flex";
    }
  }
  return (
    <>
      <Editor
        height="90vh"
        language={Lang}
        theme="hc-black"
        onChange={preTextRemove}
        on
      />
      <div className="monaco-text"></div>
    </>
  );
}
