import Flex from "@react-css/flex";
import React, { useReducer } from "react";
import styles from "./counter.module.css";

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });
  function reducer(state, action) {
    console.log("called", action);
    let result;
    switch (action.type) {
      case "inc":
        result = { ...state, count: state.count + state.step };
        break;
      case "dec":
        const nextCount = state.count - state.step;
        if (nextCount < 0) {
          console.log("0 미만은 불허됨");
          result = state;
        } else {
          result = { ...state, count: state.count - state.step };
        }
        break;
      case "reset":
        result = { ...state, count: 0, step: 1 };
        break;
      case "step":
        result = { ...state, step: action.payload };
        break;
      case "reset_step":
        result = { ...state, step: 1 };
        break;
      default:
        break;
    }
    return result;
  }
  return (
    <div>
      <p className={styles.counter}>계수기: {state.count}</p>
      <Flex justifyCenter>
        <div className={styles.deltaContainer}>
          <span>변화량: </span>
          <input
            className={styles.deltaInput}
            type="number"
            value={state.step}
            onChange={(e) => {
              let value = e.target.value;
              if (value == "") {
                console.log("공백문자열");
                dispatch({ type: "step" });
                return;
              }
              if (isNaN(value)) {
                console.log("숫자가 아님: ", e.target.value);
                alert("1 이상만 가능함");
              } else {
                console.log("숫자");
                const num = Number(value);
                if (num <= 0) {
                  alert("1 이상만 가능함");
                }
                console.log("숫자: ", e.target.value);
                const step = parseInt(e.target.value, 10);
                if (step <= 0) {
                  dispatch({ type: "reset_step" });
                } else {
                  dispatch({ type: "step", payload: step });
                }
              }
            }}
          />
        </div>
      </Flex>
      <Flex justifyCenter>
        <div className={styles.containerButtons}>
          <button onClick={() => dispatch({ type: "inc" })}>증가</button>
          <button onClick={() => dispatch({ type: "dec" })}>감소</button>
          <button onClick={() => dispatch({ type: "reset" })}>초기화</button>
        </div>
      </Flex>
    </div>
  );
}
