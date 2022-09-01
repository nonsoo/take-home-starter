import { FC } from "react";

import "./css/layout.css";
import "./css/home.css";
import "./css/formComp.css";
import "./css/reviewForm.css";

import backGround from "./imgs/background.jpg";

import FormField from "./components/Formfield";
import ReviewSection from "./components/ReviewForm";

const App: FC = () => {
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
        {/* <FormField /> */}
        <ReviewSection />
      </div>
    </div>
  );
};

export default App;
