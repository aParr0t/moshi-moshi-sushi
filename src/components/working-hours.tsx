export default function WorkingHours({ workingHours, className }) {
  return (
    <ul
      className={`text-foreground text-base font-normal font-sans ${className}`}
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
