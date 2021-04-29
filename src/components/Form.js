import React, { useContext } from "react";

import { Context } from "..";
import { observer } from "mobx-react-lite";
import UserDataTab from "./UserDataTab";
import EmailTab from "./EmailTab";
import PasswordTab from "./PasswordTab";
import ConfirmTab from "./ConfirmTab";

const CustomForm = observer(() => {
  const { formData } = useContext(Context);
  const {
    firstName,
    lastName,
    middleName,
    dateOfBirth,
    email,
    password,
    repeatPassword,
  } = formData.data;
  const values = {
    firstName,
    lastName,
    middleName,
    dateOfBirth,
    email,
    password,
    repeatPassword,
  };
  const nextStage = () => formData.setStage(formData.stage + 1);
  const prevStage = () => formData.setStage(formData.stage - 1);
  const onInput = (input) => (e) => {
    formData.setData({ ...formData.data, [input]: e.target.value });
  };
  switch (formData.stage) {
    case 1:
      return (
        <UserDataTab
          nextStage={nextStage}
          prevStage={prevStage}
          onInput={onInput}
          values={values}
        />
      );
    case 2:
      return (
        <EmailTab
          nextStage={nextStage}
          prevStage={prevStage}
          onInput={onInput}
          values={values}
        />
      );
    case 3:
      return (
        <PasswordTab
          nextStage={nextStage}
          prevStage={prevStage}
          onInput={onInput}
          values={values}
        />
      );
    case 4:
      return <ConfirmTab prevStage={prevStage} values={values} />;
    default:
      return null;
  }
});

export default CustomForm;
