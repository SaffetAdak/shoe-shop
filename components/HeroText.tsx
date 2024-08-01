interface HeroTextProps {
  text: string;
  className?: string;
}
export default function HeroText({ text, className }: HeroTextProps) {
  return (
    <h1
      className={`${
        className || ""
      } opacity-100 absolute uppercase font-oswald font-black`}
    >
      {text}
    </h1>
  );
}
