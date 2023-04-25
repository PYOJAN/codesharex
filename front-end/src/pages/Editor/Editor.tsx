import CodeMirror from "@uiw/react-codemirror";
import { langs, LanguageName } from "@uiw/codemirror-extensions-langs";
import { dracula } from "@uiw/codemirror-theme-dracula";
import React, { useCallback, useMemo } from "react";

interface EditorOption {
  lang: LanguageName;
}

const CodeEditor: React.FC<EditorOption> = ({ lang }): JSX.Element => {
  const selectedExtension = useMemo(() => {
    return lang === "javascript"
      ? langs.javascript({ jsx: true, typescript: true })
      : langs[lang]();
  }, [lang]);

  const onChange = useCallback((value: any, viewUpdate: any) => {
    console.log("value:", value);
  }, []);

  return (
    <CodeMirror
      className="h-full font-bold"
      value="console.log('hello world!');"
      height="100%"
      theme={dracula}
      extensions={selectedExtension ? [selectedExtension] : []}
      onChange={onChange}
      basicSetup={{
        allowMultipleSelections: true,
        autocompletion: true,
        bracketMatching: true,
        closeBrackets: true,
        history: true,
      }}
    />
  );
};

export default CodeEditor;
