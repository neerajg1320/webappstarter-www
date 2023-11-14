import * as React from "react";
import ReactCode from "../Typewriter";
import CssCode from "../Typewriter";
import HtmlCode from "../Typewriter";
import * as style from "./styles.module.scss";

const Boxes = () => {
  const cssCode = [
    "body",
    "{",
    "&nbsp;&nbsp;display: flex;",
    "&nbsp;&nbsp;justify-content: center;",
    "&nbsp;&nbsp;align-items: center;",
    "&nbsp;&nbsp;background: rgba(48, 157, 36, 0.787);",
    "&nbsp;&nbsp;min-height: 100vh;",
    "&nbsp;&nbsp;font-size: 20px;",
    "}",
  ];

  const reactCode = [
    "import React from &quot;react&quot;",
    "const App = ()=>{",
    "&nbsp;&nbsp;return(",
    "&nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello ✌, Friends",
    "&nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;",
    ")}"
  ];

  const htmlCode = [
    "&lt;html&gt;",
    "&nbsp;&nbsp;&lt;head&gt;",
    "&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;",
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WebappStarter Project Preview",
    "&nbsp;&nbsp;&nbsp;&nbsp;&lt;/title&gt;",
    "&nbsp;&nbsp;&lt;/head&gt;",
    "&nbsp;&nbsp;&lt;body&gt;",
    "&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id=&quot;root&quot;&gt;&lt;/div&gt;",
    "&nbsp;&nbsp;&lt;/body&gt;",
    "&lt;/html&gt;"
  ];

  return (
    <div className={style.boxes}>
      <ReactCode text={reactCode} boxClass={"reactBox"} />
      <CssCode text={cssCode} boxClass={"cssBox"} />
      <HtmlCode text={htmlCode} boxClass={"htmlBox"} />
    </div>
  );
};

export default Boxes;
