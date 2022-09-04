import { FC, useState } from "react";

import { userInfo } from "../types/projectTypes";

import { useAppDispatch } from "../redux/hooks";
import { increaseCurrPage } from "../redux/slices/page";

const FormField: FC = () => {
  const dispatch = useAppDispatch();

  const [userInfo, setUserInfo] = useState<userInfo>({
    fName: "",
    lName: "",
    phone: "",
    email: "",
  });
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(increaseCurrPage());
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
            <input
              type="text"
              className="userInfo__textBox"
              id="fName"
              value={userInfo.fName}
              onChange={(e) =>
                setUserInfo({ ...userInfo, fName: e.target.value })
              }
              required
            />
          </div>
          <div className="inputField">
            <label htmlFor="lName" className="inputField__labelName">
              Last Name
            </label>
            <input
              type="text"
              className="userInfo__textBox"
              id="lName"
              value={userInfo.lName}
              onChange={(e) =>
                setUserInfo({ ...userInfo, lName: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="inputField">
          <label htmlFor="phone" className="inputField__labelName">
            Phone number
          </label>
          <input
            type="text"
            className="userInfo__textBox"
            id="phone"
            value={userInfo.phone}
            onChange={(e) =>
              setUserInfo({ ...userInfo, phone: e.target.value })
            }
            required
          />
        </div>
        <div className="inputField">
          <label htmlFor="email" className="inputField__labelName">
            Email Address
          </label>
          <input
            type="email"
            className="userInfo__textBox"
            id="email"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            required
          />
        </div>
        <button className="userInfo__submit">Continue</button>
      </form>
    </section>
  );
};

export default FormField;
