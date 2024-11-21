import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./product.module.css";

export default function Product() {
  const [prodId, setProdId] = React.useState("");
  const naviagte = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (prodId) {
      console.log("제품ID: ", prodId);
      setProdId("");
      let path = "/product/" + prodId;
      naviagte(path);
    } else {
      alert("제품 ID를 입력하세요.");
    }
  }
  return (
    <div className={styles.productDetails}>
      <form onSubmit={handleSubmit}>
        검색 제품 ID:
        <input
          type="text"
          value={prodId}
          onChange={(e) => setProdId(e.target.value)}
        />
        <button type="submit">검색</button>
      </form>
      <Outlet />
    </div>
  );
}
