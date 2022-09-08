import { FC, useEffect, useState, ReactNode } from "react";

import {
  loadUserStateFromLocalStorage,
  removeUserStateFromLocalStorage,
  loadPokeStateFromLocalStorage,
} from "../utils/helper/saveData";

import { useAppDispatch } from "../redux/hooks";
import { setCurrPage } from "../redux/slices/page";
import { submitForm, resetForm } from "../redux/slices/submitForm";
import { useAppSelector } from "../redux/hooks";

import Btn from "./btn";
import PreviewPokemon from "./previewPokemon";

interface Props {
  children: ReactNode;
}

const ReviewForm: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [disableBtn, setDisableBtn] = useState<boolean>(false);

  const savedData = loadUserStateFromLocalStorage();
  const savedPokemon = loadPokeStateFromLocalStorage();

  const statusOne = useAppSelector((state) => state.form.pages.oneComplete);
  const statusTwo = useAppSelector((state) => state.form.pages.twoComplete);

  useEffect(() => {
    if (!statusOne || !statusTwo) {
      setDisableBtn(true);
    }
  }, [statusOne, statusTwo]);

  const onReset = () => {
    removeUserStateFromLocalStorage();
    dispatch(setCurrPage(1));
    dispatch(resetForm());
  };

  const onSubmit = () => {
    dispatch(submitForm());
  };
  return (
    <>
      <section className="reviewSection mainContain">
        <p className="reviewSection__Title">
          Let's review your <br />
          information
        </p>
        <div className="reviewItem">
          <p className="reviewItem__Label">First Name</p>
          <span className="reviewItem__item">{savedData?.fName}</span>
        </div>
        <div className="reviewItem">
          <p className="reviewItem__Label">Last Name</p>
          <span className="reviewItem__item">{savedData?.lName}</span>
        </div>
        <div className="reviewItem">
          <p className="reviewItem__Label">Phone number</p>
          <span className="reviewItem__item">{savedData?.phone}</span>
        </div>
        <div className="reviewItem">
          <p className="reviewItem__Label">Email Address</p>
          <span className="reviewItem__item">{savedData?.email}</span>
        </div>

        {savedPokemon && (
          <PreviewPokemon
            name={savedPokemon.name}
            types={savedPokemon.types}
            imgUrl={savedPokemon.imgUrl}
          />
        )}

        <div className="BtnsContainer">
          <Btn btnName="Reset" onToggle={() => onReset()} />
          <button
            className="btn"
            disabled={disableBtn}
            onClick={() => onSubmit()}
          >
            Submit
          </button>
        </div>
      </section>
      {children}
    </>
  );
};

export default ReviewForm;
