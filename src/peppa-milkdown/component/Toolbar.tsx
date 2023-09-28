import { CmdKey, Editor } from "@milkdown/core";
import { callCommand } from "@milkdown/utils";
import {
  toggleEmphasisCommand,
  toggleStrongCommand,
} from "@milkdown/preset-commonmark";
import { PepperMilkdownFunc } from "..";
import { KolButton } from "@public-ui/react";

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
        <KolButton
          _icon="codicon codicon-bold"
          _label="Bold"
          _variant="normal"
          _hideLabel
          onMouseDown={() => call(toggleStrongCommand.key)}
        />
      )}
      {handleCheck(PepperMilkdownFunc.Italic) && (
        <KolButton
          _icon="codicon codicon-italic"
          _label="Italic"
          _variant="normal"
          _hideLabel
          onMouseDown={() => call(toggleEmphasisCommand.key)}
        />
      )}
    </div>
  );
}
