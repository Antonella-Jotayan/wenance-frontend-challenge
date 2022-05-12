import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLButtonElement> {
  theme?: "primary" | "secondary";
  text: string;
}

const buttonStyle = {
  primary:
    "bg-yellow-300 text-black p-3 font-PtSans text-lg rounded-xl hover:bg-yellow-400 active:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-200",
  secondary:
    "bg-yellow-300 text-black p-3 font-PtSans text-lg rounded-r-xl hover:bg-yellow-400 active:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-200",
};

const Button = ({ text, onClick, theme = "primary" }: Props) => {
  return (
    <button className={buttonStyle[theme]} onClick={onClick}>
      {text}
    </button>
  );
};

export { Button };
