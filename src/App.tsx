import React from "react";
import { Editor, rootCtx } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { peppaPreset } from "./peppa-milkdown";
import "@milkdown/theme-nord/style.css";
import "./styles.css";

const MilkdownEditor: React.FC = () => {
  useEditor((root) =>
    Editor.make()
      .config(nord)
      .config((ctx) => {
        ctx.set(rootCtx, root);
      })
      .use(peppaPreset)
  );
  let asd = Editor.make();
  asd.use(peppaPreset);
  if (true) {
    asd.use(peppaPreset);
  }

  return <Milkdown />;
};

export const MilkdownEditorWrapper: React.FC = () => {
  return (
    <MilkdownProvider>
      <MilkdownEditor />
    </MilkdownProvider>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Milkdown Test</h1>
      <a href="https://milkdown.dev/docs/recipes/react">Docs Milkdown React</a>
      <br />
      <a href="https://github.com/Milkdown/website/blob/main/src/components/playground-editor/index.tsx">
        Menü Buttons Beispiel
      </a>
      <br />
      <br />
      <MilkdownEditorWrapper />
      <br />
      <MilkdownEditorWrapper />
    </div>
  );
}
