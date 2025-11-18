import clsx from "clsx";

type Props = {
  label: string;
  activated?: boolean;
};

export function Chip({ activated, label }: Props) {
  return (
    <span
      className={clsx(
        "py-2 px-4 block rounded-full text-xs hover:brightness-110 ",
        activated ? "text-bg bg-accent" : "bg-bg-elevated text-white"
      )}
    >
      {label}
    </span>
  );
}
