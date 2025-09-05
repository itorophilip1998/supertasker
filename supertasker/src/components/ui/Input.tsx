import { TbUserEdit } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";

type InputProps = {
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const iconDisplayFn = (type: string) => {
  switch (type) {
    case "text":
      return <TbUserEdit />;
    case "email":
      return <MdOutlineMailOutline />;
    case "password":
      return <CiLock />;
    default:
      return null;
  }
};

export default function Input(props: InputProps) {
  return (
    <div>
      <div className="absolute ml-3 mt-3 text-gray-400">
        {props.type && iconDisplayFn(props.type)}
      </div>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className="border border-gray-300 rounded-md p-2 w-full"
        onChange={props.onChange}
        value={props.value}
        {...props}
      />
    </div>
  );
}
