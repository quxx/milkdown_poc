import { useCallback, useState } from "react";
import {
  CmdKey,
  Editor,
  defaultValueCtx,
  editorViewOptionsCtx,
  rootAttrsCtx,
  rootCtx,
} from "@milkdown/core";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import {
  placeholder as placeholderPlugin,
  placeholderCtx,
} from "milkdown-plugin-placeholder";
import { nord } from "@milkdown/theme-nord";
import "@milkdown/theme-nord/style.css";
import {
  buildCommands,
  buildInputrules,
  buildKeyMap,
  buildPlugins,
  buildShema,
} from "./composed";
import { MilkdownPlugin } from "@milkdown/ctx";
import { callCommand } from "@milkdown/utils";
import {
  toggleEmphasisCommand,
  toggleStrongCommand,
} from "@milkdown/preset-commonmark";
import { Button } from "./component/Button";

interface MilkdownInternalProps {
  defaultValue: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
  config: PepperMilkdownFunc[];
  markdownView?: boolean;
}

interface MilkdownProps extends MilkdownInternalProps {
  setEditor: (edtior: Editor) => void;
}

export function MarkdownEditor({
  name,
  defaultValue,
  placeholder,
  onChange,
  config,
  markdownView,
}: MilkdownInternalProps & {
  name: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const handleChange = useCallback(
    (newValue: string) => {
      setValue(newValue);
      onChange?.(newValue);
    },
    [setValue, onChange]
  );

  const [editor, setEditor] = useState<Editor>(); // the lifted state

  const sendDataToParent = (e: Editor) => {
    setEditor(e);
  };

  function call<T>(command: CmdKey<T>, payload?: T) {
    return editor?.action(callCommand(command, payload));
  }

  function handleCheck(val: PepperMilkdownFunc): boolean {
    return config.some((item) => val === item);
  }

  return (
    <MilkdownProvider>
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
      <input type="hidden" name={name} value={value} />
      <MilkdownInternal
        defaultValue={defaultValue}
        onChange={handleChange}
        placeholder={placeholder}
        config={config}
        setEditor={sendDataToParent}
      />
      {markdownView && (
        <textarea
          className="prose w-65 editor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </MilkdownProvider>
  );
}

function MilkdownInternal({
  defaultValue,
  placeholder,
  onChange,
  config,
  setEditor,
}: MilkdownProps) {
  const d = useEditor(
    (root) =>
      Editor.make()
        .config((ctx) => {
          ctx.set(rootCtx, root);
          ctx.set(defaultValueCtx, defaultValue);
          if (placeholder !== undefined) {
            ctx.set(placeholderCtx, placeholder);
          }
          ctx.update(editorViewOptionsCtx, (prev) => ({
            ...prev,
            attributes: {
              class: "h-full",
            },
            editable: () => true,
          }));
          ctx.update(rootAttrsCtx, (prev) => ({
            ...prev,
            class: "milkdown-editor prose m-auto",
          }));

          const listener = ctx.get(listenerCtx);

          listener.markdownUpdated((_ctx, markdown, prevMarkdown) => {
            if (markdown !== prevMarkdown) {
              onChange(markdown);
            }
          });
        })
        .config(nord)
        .use(listener)
        .use(placeholderPlugin)
        .use(buildPreset(config)),
    [onChange, placeholder]
  );
  setEditor(d.get() as Editor);

  return <Milkdown />;
}

function buildPreset(
  config: PepperMilkdownFunc[]
): MilkdownPlugin | MilkdownPlugin[] {
  return [
    buildShema(config),
    buildInputrules(config),
    buildCommands(config),
    buildKeyMap(config),
    buildPlugins(config),
  ].flat();
}

export enum PepperMilkdownFunc {
  Bold,
  Italic,
}
