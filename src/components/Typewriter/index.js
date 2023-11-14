import * as React from "react";
import * as styles from "./styles.module.scss";

function Typewriter({ text, boxClass }) {
  const iSpeed = 100;
  const iScrollAt = 20;
  const [iIndex, setIndex] = React.useState(0);
  const [iTextPos, setTextPos] = React.useState(0);
  const [sContents, setContents] = React.useState("");
  const [iArrLength, setArrLength] = React.useState(text[0].length);

  React.useEffect(() => {
    function typewriter() {
      if (iIndex < text.length) {
        let iRow = Math.max(0, iIndex - iScrollAt);
        let newContents = "";

        while (iRow < iIndex) {
          newContents += text[iRow++] + "<br />";
        }

        if (iTextPos <= iArrLength) {
          setContents(newContents + text[iIndex].substring(0, iTextPos) + "_");
          setTextPos(iTextPos + 1);
        } else {
          setTextPos(0);
          setIndex(iIndex + 1);
          if (iIndex < text.length) {
            setArrLength(text[iIndex].length);
          }
        }
      } else {
        setIndex(0);
        setTextPos(0);
        setContents("");
        setArrLength(text[0].length);
      }
    }

    const timeout = setTimeout(typewriter, iSpeed);

    return () => clearTimeout(timeout);
  }, [iIndex, iTextPos, iArrLength, text, iSpeed, iScrollAt]);

  return (
    <div className={`${styles.codeBox} ${styles[boxClass]}`}>
      <pre
        className={styles.typedtext}
        dangerouslySetInnerHTML={{ __html: sContents }}
      ></pre>
    </div>
  );
}

export default Typewriter;
