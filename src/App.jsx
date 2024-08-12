import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calValue, setCalVal] = useState("");

  const onButtonClick = (buttonName) => {
    if (buttonName === "C"){

      setCalVal("");

    } else if(buttonName === "="){

      const result = eval(calValue);
      setCalVal(result);

    }else {
      
        const newDisplayValue = calValue + buttonName;
        setCalVal(newDisplayValue);

    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calValue}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
