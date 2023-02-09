interface ButtonProps {
  className: string;
  text: string | number;
  action: () => void;
  disabled: boolean;
}

const Button = ({
  className,
  text,
  action,
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <button onClick={action} className={className} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
