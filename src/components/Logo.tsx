interface Props {
  size?: "md" | "lg";
}

export function Logo({ size = "md" }: Props) {
  return (
    <span
      className={`lowercase ${
        size === "md" ? "text-3xl" : "text-5xl"
      } mb-1 text-amber-100 font-bold font-body`}
    >
      <a className="cursor-pointer">Vyxxe</a>
    </span>
  );
}
