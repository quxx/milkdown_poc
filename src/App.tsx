import "@milkdown/theme-nord/style.css";
import "./styles.css";
import { MarkdownEditor, PepperMilkdownFunc } from "./peppa-milkdown";

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
      <MarkdownEditor
        defaultValue={"TEst"}
        onChange={function (newValue: string): void {
          console.log(newValue);
        }}
        name={""}
        config={[PepperMilkdownFunc.Bold, PepperMilkdownFunc.Italic]}
        markdownView={true}
      />
      <br />
      <MarkdownEditor
        defaultValue={""}
        onChange={function (newValue: string): void {
          console.log(newValue);
        }}
        name={""}
        config={[PepperMilkdownFunc.Bold]}
      />
    </div>
  );
}
