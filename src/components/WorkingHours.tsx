type Props = {
  workingHours: {
    day: string;
    open: string;
    close: string;
    isClosed: boolean;
  }[];
  className?: string;
};

export default function WorkingHours({ workingHours, className }: Props) {
  return (
    <ul
      className={`text-foreground text-base font-normal font-sans whitespace-nowrap ${className}`}
    >
      {workingHours.map((h) => {
        let content = "";
        if (h.isClosed) {
          content = "stengt";
        } else {
          content = `${h.open.slice(0, -3)} - ${h.close.slice(0, -3)}`;
        }

        return (
          <li key={h.day}>
            <span className="capitalize">{h.day}</span>: {content}
          </li>
        );
      })}
    </ul>
  );
}
