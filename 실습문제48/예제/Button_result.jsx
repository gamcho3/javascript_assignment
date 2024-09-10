export default function Button({ children, mode = "filled", Icon, ...props }) {
  let className = `button ${mode}-button`;

  if (Icon) {
    className += " icon-button";
  }

  // Todo: Build this component!
  return (
    <button className={className} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
