import { FC } from "react";

import "./css/layout.css";
import "./css/home.css";
import "./css/formComp.css";
import "./css/reviewForm.css";

import backGround from "./imgs/background.jpg";

import FormField from "./components/Formfield";
import ReviewSection from "./components/ReviewForm";

import { useAppSelector } from "./redux/hooks";

const App: FC = () => {
  const currPage = useAppSelector((state) => state.page.currPage);
  return (
    <div className="App">
      <div className="ImgContainer">
        <p className="ImgContainer_Title">Matted</p>
        <img
          src={backGround}
          alt="This is the background imgs"
          className="imgBackground"
        />
      </div>
      <div className="formContainer">
        {currPage === 1 && <FormField />}
        {currPage === 2 && <ReviewSection />}
      </div>
    </div>
  );
};

export default App;
