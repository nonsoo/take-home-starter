import { FC, useEffect, useState } from "react";

import { userInfo } from "../utils/types/projectTypes";
import {
  loadUserStateFromLocalStorage,
  removeUserStateFromLocalStorage,
} from "../utils/helper/saveData";

import { useAppDispatch } from "../redux/hooks";
import { setCurrPage } from "../redux/slices/page";

import Btn from "./btn";

const ReviewForm: FC = () => {
  const dispatch = useAppDispatch();
  const [savedData, setSavedData] = useState<userInfo | null>(null);
  const [disableBtn, setDisableBtn] = useState<boolean>(false);
  useEffect(() => {
    const userData = loadUserStateFromLocalStorage();
    if (userData) {
      setSavedData(userData);

      if (
        userData.fName === "" ||
        userData.lName === "" ||
        userData.email === "" ||
        userData.phone === ""
      ) {
        setDisableBtn(true);
      }
    }
  }, []);

  const onReset = () => {
    removeUserStateFromLocalStorage();
    dispatch(setCurrPage(1));
  };
  return (
    <section className="reviewSection mainContain">
      <p className="reviewSection__Title">
        Let's review your <br />
        information
      </p>
      <div className="reviewItem">
        <p className="reviewItem__Label">First Name</p>
        <p className="reviewItem__item">{savedData?.fName}</p>
      </div>
      <div className="reviewItem">
        <p className="reviewItem__Label">Last Name</p>
        <p className="reviewItem__item">{savedData?.lName}</p>
      </div>
      <div className="reviewItem">
        <p className="reviewItem__Label">Phone number</p>
        <p className="reviewItem__item">{savedData?.phone}</p>
      </div>
      <div className="reviewItem">
        <p className="reviewItem__Label">Email Address</p>
        <p className="reviewItem__item">{savedData?.email}</p>
      </div>
      <div className="BtnsContainer">
        <Btn btnName="Reset" onToggle={() => onReset()} />
        <button className="btn" disabled={disableBtn}>
          Submit
        </button>
      </div>
    </section>
  );
};

export default ReviewForm;
