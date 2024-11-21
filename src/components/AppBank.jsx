import Flex from "@react-css/flex";
import React, { useReducer, useState } from "react";
import styles from "./appBank.module.css";

export default function AppBank() {
  const [amount, setAmount] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    accountNo: "559",
    balance: 0,
  });
  let korCurr = Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  });
  function reducer(state, action) {
    switch (action.type) {
      case "deposit":
        return { ...state, balance: state.balance + amount };
      case "withdraw":
        return { ...state, balance: state.balance - amount };
      case "transfer":
        return { ...state, balance: 0 };
      default:
        return state;
    }
  }
  return (
    <div className={styles.bankAppContainer}>
      <h1>범이 은행</h1>
      <div className={styles.balanceContainer}>
        <p>
          통장(계좌번호: {state.accountNo}) 잔고:{" "}
          {korCurr.format(state.balance)}{" "}
        </p>
      </div>
      <div className={styles.amountContainer}>
        <span>금액 : </span>
        <input
          className={styles.amountInput}
          type="text"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <Flex justifyCenter>
        <div className={styles.buttonsContainer}>
          <button onClick={() => dispatch({ type: "deposit" })}>입금</button>
          <button onClick={() => dispatch({ type: "withdraw" })}>출금</button>
          <button onClick={() => dispatch({ type: "transfer" })}>이체</button>
        </div>
      </Flex>
    </div>
  );
}
