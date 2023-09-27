import { CmdKey, Editor } from "@milkdown/core";
import { callCommand } from "@milkdown/utils";
import {
  toggleEmphasisCommand,
  toggleStrongCommand,
} from "@milkdown/preset-commonmark";
import { Button } from "./Button";
import { PepperMilkdownFunc } from "..";

interface ToolbarProps {
  editor: Editor;
  config: PepperMilkdownFunc[];
}

export function Toolbar({ config, editor }: ToolbarProps) {
  function call<T>(command: CmdKey<T>, payload?: T) {
    return editor?.action(callCommand(command, payload));
  }

  function handleCheck(val: PepperMilkdownFunc): boolean {
    return config.some((item) => val === item);
  }

  return (
    <div className="prose mx-auto flex">
      {handleCheck(PepperMilkdownFunc.Bold) && (
        <Button
          icon="format_bold"
          onClick={() => call(toggleStrongCommand.key)}
        />
      )}
      {handleCheck(PepperMilkdownFunc.Italic) && (
        <Button
          icon="format_italic"
          onClick={() => call(toggleEmphasisCommand.key)}
        />
      )}
    </div>
  );
}
