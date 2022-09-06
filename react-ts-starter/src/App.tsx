import { FC } from "react";

import "./css/layout.css";
import "./css/home.css";
import "./css/formComp.css";
import "./css/reviewForm.css";
import "./css/genericComponents.css";
import "./css/submittedForm.css";
import "./css/pokemonForm.css";
import "./css/previewPokemon.css";

import backGround from "./imgs/background.jpg";

import FormField from "./components/Formfield";
import ReviewSection from "./components/ReviewForm";
import CompletedStatus from "./components/submitted";
import PickPokemon from "./components/pickPokemon";

import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { setCurrPage } from "./redux/slices/page";

const App: FC = () => {
  const currPage = useAppSelector((state) => state.page.currPage);
  const formCompleted = useAppSelector((state) => state.form.isFormSubmitted);
  const dispatch = useAppDispatch();
  const pageLst: number[] = [1, 2];

  const goToPage = (pageNumber: number) => {
    dispatch(setCurrPage(pageNumber));
  };
  return (
    <div className="App">
      <section className="ImgContainer">
        <p className="ImgContainer_Title">PokéForms</p>
        <img
          src={backGround}
          alt="This is the background imgs"
          className="imgBackground"
        />
      </section>
      {formCompleted ? (
        <CompletedStatus />
      ) : (
        <section className="formContainer">
          {currPage === 1 && <FormField />}
          {currPage === 2 && <PickPokemon />}
          {currPage === 3 && (
            <ReviewSection>
              <section className="pageSelector">
                {pageLst.map((page) => (
                  <div
                    className="pageSelector__selector"
                    key={page}
                    onClick={() => goToPage(page)}
                  >
                    {page}
                  </div>
                ))}
              </section>
            </ReviewSection>
          )}
        </section>
      )}
    </div>
  );
};

export default App;
