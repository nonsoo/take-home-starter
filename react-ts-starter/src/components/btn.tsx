import { FC } from "react";

interface Props {
  btnName: string;
  exCSS?: string;
}
const Btn: FC<Props> = ({ btnName, exCSS }) => {
  return <button className={`btn ${exCSS}`}>{btnName}</button>;
};

export default Btn;
