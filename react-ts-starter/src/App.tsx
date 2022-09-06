import { FC } from "react";

import "./css/layout.css";
import "./css/home.css";
import "./css/formComp.css";
import "./css/reviewForm.css";
import "./css/genericComponents.css";

import backGround from "./imgs/background.jpg";

import FormField from "./components/Formfield";
import ReviewSection from "./components/ReviewForm";

import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { setCurrPage } from "./redux/slices/page";

const App: FC = () => {
  const currPage = useAppSelector((state) => state.page.currPage);
  const dispatch = useAppDispatch();
  const pageLst: number[] = [1, 2, 3];

  const goToPage = (pageNumber: number) => {
    dispatch(setCurrPage(pageNumber));
  };
  return (
    <div className="App">
      <section className="ImgContainer">
        <p className="ImgContainer_Title">Matted</p>
        <img
          src={backGround}
          alt="This is the background imgs"
          className="imgBackground"
        />
      </section>
      <section className="formContainer">
        {currPage === 1 && <FormField />}
        {currPage === 2 && <ReviewSection />}
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
      </section>
    </div>
  );
};

export default App;
