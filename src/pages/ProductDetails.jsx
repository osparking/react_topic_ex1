import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  return (
    <div>
      <p>제품 ID: {id}</p>
    </div>
  );
}
