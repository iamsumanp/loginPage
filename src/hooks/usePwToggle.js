import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const UsePwToggle = () => {
  const [visible, setVisible] = useState(false);

  const InputType = visible ? "text" : "password";
  //   const InputType = "text";
  //   const Icon = visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />;
  const Icon = visible ? (
    <AiOutlineEye size={25} />
  ) : (
    <AiOutlineEyeInvisible size={25} />
  );

  const toggleVisiblity = () => {
    setVisible((visible) => !visible);
  };
  // <FontAwesomeIcon
  //   icon={visible ? "eye-slash" : "eye"}
  //   onClick={() => setVisible((visible) => !visible)}
  // />
  //   );

  return [InputType, Icon, toggleVisiblity];
};

export default UsePwToggle;

// import React from "react";

// export const UsePasswordToggle = () => {
//   return <div>UsePasswordToggle</div>;
// };
