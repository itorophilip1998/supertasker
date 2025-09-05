type ButtonProps = {
  type?: string;
  value?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return (
    <div>
      <button
        type={props.type}
        className="border border-gray-300 rounded-md p-2 w-full"
        onClick={props.onClick}
        disabled={props.disabled}
        {...props}
      >
        {/* TODO: fix loading spinner */}
        {props.isLoading ? <div>Loading...</div> : props.value}
      </button>
    </div>
  );
}
