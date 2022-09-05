import { FC } from "react";

interface Props {
  btnName: string;
  exCSS?: string;
  onToggle?: () => void;
}
const Btn: FC<Props> = ({ btnName, exCSS, onToggle }) => {
  return (
    <button className={`btn ${exCSS}`} onClick={onToggle} disabled={false}>
      {btnName}
    </button>
  );
};

export default Btn;
