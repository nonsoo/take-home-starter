import { FC } from "react";

import { removeUserStateFromLocalStorage } from "../utils/helper/saveData";

import { useAppDispatch } from "../redux/hooks";
import { setCurrPage } from "../redux/slices/page";
import { resetForm } from "../redux/slices/submitForm";

import Btn from "./btn";

import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Submitted: FC = () => {
  const dispatch = useAppDispatch();

  const onResetForm = () => {
    removeUserStateFromLocalStorage();
    dispatch(setCurrPage(1));
    dispatch(resetForm());
  };
  return (
    <section className="mainContain submittedForm">
      <IoCheckmarkCircleSharp className="submittedForm__Icon" />
      <p className="submittedForm__text">
        Your input has been successfully submitted!
      </p>
      <Btn
        btnName="Reset Form"
        exCSS="submittedForm__Btn"
        onToggle={() => onResetForm()}
      />
    </section>
  );
};

export default Submitted;
