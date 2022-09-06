import { FC, useEffect, useState, ReactNode } from "react";

import { userInfo, Pokemon } from "../utils/types/projectTypes";
import {
  loadUserStateFromLocalStorage,
  removeUserStateFromLocalStorage,
  loadPokeStateFromLocalStorage,
} from "../utils/helper/saveData";

import { useAppDispatch } from "../redux/hooks";
import { setCurrPage } from "../redux/slices/page";
import { submitForm } from "../redux/slices/submitForm";

import Btn from "./btn";
import PreviewPokemon from "./previewPokemon";

interface Props {
  children: ReactNode;
}

const ReviewForm: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [savedData, setSavedData] = useState<userInfo | null>(null);
  const [savedPokemon, setSavedPokemon] = useState<Pokemon | null>(null);
  const [disableBtn, setDisableBtn] = useState<boolean>(false);
  useEffect(() => {
    const userData = loadUserStateFromLocalStorage();
    const pokeData = loadPokeStateFromLocalStorage();
    if (userData) {
      setSavedData(userData);
      setSavedPokemon(pokeData);

      if (
        userData?.fName === "" ||
        userData.lName === "" ||
        userData.email === "" ||
        userData.phone === "" ||
        pokeData === null
      ) {
        setDisableBtn(true);
      }
    }
  }, []);

  const onReset = () => {
    removeUserStateFromLocalStorage();
    dispatch(setCurrPage(1));
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
