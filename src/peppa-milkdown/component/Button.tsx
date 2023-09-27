import { useLinkClass } from "../useLink";
import clsx from "clsx";

export const Button: React.FC<{ icon: string; onClick?: () => void }> = ({
  icon,
  onClick,
}) => {
  const linkClass = useLinkClass();
  return (
    <div
      className={clsx(
        "flex h-10 w-10 cursor-pointer items-center justify-center rounded icon",
        linkClass(false)
      )}
      onMouseDown={(e) => {
        onClick?.();
        e.preventDefault();
      }}
    >
      <span className="material-symbols-outlined !text-base">{icon}</span>
    </div>
  );
};
