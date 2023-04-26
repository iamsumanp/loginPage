import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const UsePwToggle = () => {
  const [visible, setVisible] = useState(false);

  const InputType = visible ? "text" : "password";

  const Icon = visible ? (
    <AiOutlineEye size={25} />
  ) : (
    <AiOutlineEyeInvisible size={25} />
  );

  const toggleVisiblity = () => {
    setVisible((visible) => !visible);
  };

  return [InputType, Icon, toggleVisiblity];
};

export default UsePwToggle;
