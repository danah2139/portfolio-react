import React, { Fragment } from "react";
import MyProjects from "./MyProjects/MyProjects";
import WhatIKnow from "./WhatIKnow/WhatIKnow";
import WhoIAm from "./WhoIAm/WhoIAm";



function SiteSecitonMap({ elementId }){
  switch (elementId) {
    case "who-i-am":
      return <WhoIAm />;

    case "what-i-know":
      return <WhatIKnow />;

    case "my-projects":
      return <MyProjects />;


    default:
      return <Fragment></Fragment>;
  }
}

export default SiteSecitonMap;
