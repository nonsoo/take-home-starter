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
  const [savedData, setSavedData] = useState<userInfo | null>();
  useEffect(() => {
    setSavedData(loadUserStateFromLocalStorage());
  }, []);

  const onReset = () => {
    removeUserStateFromLocalStorage();
    dispatch(setCurrPage(1));
  };
  return (
    <section className="reviewSection mainContain">
      <p className="reviewSection__Title">
        Review your details <br />
        before you submit
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
      <Btn btnName="Send" />
      <Btn btnName="Reset" onToggle={() => onReset()} />
    </section>
  );
};

export default ReviewForm;
