import { FC } from "react";
import Btn from "./btn";

const ReviewForm: FC = () => {
  return (
    <section className="reviewSection mainContain">
      <p className="reviewSection__Title">
        Review your details <br />
        before you submit
      </p>

      <div className="reviewItem">
        <p className="reviewItem__Label">First Name</p>
        <p className="reviewItem__item">John Smith</p>
      </div>
      <div className="reviewItem">
        <p className="reviewItem__Label">Last Name</p>
        <p className="reviewItem__item">Robinson</p>
      </div>
      <div className="reviewItem">
        <p className="reviewItem__Label">Phone number</p>
        <p className="reviewItem__item">6479952269</p>
      </div>
      <div className="reviewItem">
        <p className="reviewItem__Label">Email Address</p>
        <p className="reviewItem__item">jR@gmail.com</p>
      </div>
      <Btn btnName="Send" />
    </section>
  );
};

export default ReviewForm;
