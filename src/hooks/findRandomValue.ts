import { useEffect, useState } from "react";

// a react hook for developer to find an exact value for a magic constant
// The value should increase when pressing the up arrow key
// The value should decrease when pressing the down arrow key
// The value should be printed to the console when pressing the space key
type Props = {
  step?: number;
};

export default function useFindRandomValue({ step = 1 }: Props) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
          setValue((prevValue) => prevValue + step);
          break;
        case "ArrowLeft":
          setValue((prevValue) => prevValue - step);
          break;
        case " ":
          console.log(value);
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [step, value]);

  return value;
}
