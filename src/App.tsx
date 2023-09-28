import "@milkdown/theme-nord/style.css";
import "./styles.css";
import { MarkdownEditor, PepperMilkdownFunc } from "./peppa-milkdown";
import { KolSpin } from "@public-ui/react";

export const App = () => {
  return (
    <div className="App">
      <h1>Milkdown Test</h1>
      <br />
      <br />
      <MarkdownEditor
        defaultValue={"Test"}
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
};
