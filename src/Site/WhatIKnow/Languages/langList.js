import jScript from "../../../assests/js.png";
import python from "../../../assests/python.png";
import cSharp from "../../../assests/cSharp.png";
import CodeWindow from "../../../Components/Icons/CodeWindow";

const langList = {
  name: "Languages",
  icon: (props) => CodeWindow(props),
  technologies: [
    {
      name: "Javascript",
      image: jScript,
    },
    {
      name: "Python",
      image: python,
    },
    { name: "C#", image: cSharp },
  ],
};

export default langList;
