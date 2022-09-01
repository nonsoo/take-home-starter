import { FC } from "react";

const formField: FC = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <section className="FormSection mainContain">
      <p className="FormSection__Title">
        Love to hear from you, <br />
        Get in touch!
      </p>

      <form className="userInfo" onSubmit={onSubmit}>
        <div className="userInfo__Name">
          <div className="inputField">
            <label htmlFor="fName" className="inputField__labelName">
              First Name
            </label>
            <input type="text" className="userInfo__textBox" id="fName" />
          </div>
          <div className="inputField">
            <label htmlFor="lName" className="inputField__labelName">
              Last Name
            </label>
            <input type="text" className="userInfo__textBox" id="lName" />
          </div>
        </div>
        <div className="inputField">
          <label htmlFor="phone" className="inputField__labelName">
            Phone number
          </label>
          <input type="text" className="userInfo__textBox" id="phone" />
        </div>
        <div className="inputField">
          <label htmlFor="email" className="inputField__labelName">
            Email Address
          </label>
          <input type="email" className="userInfo__textBox" id="email" />
        </div>
        <button className="userInfo__submit">Continue</button>
      </form>
    </section>
  );
};

export default formField;
