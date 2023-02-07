interface ButtonProps {
  className: string;
  text: string | number;
  action: () => void;
}

const Button = ({ className, text, action }: ButtonProps): JSX.Element => {
  return (
    <button onClick={action} className={className}>
      {text}
    </button>
  );
};

export default Button;
