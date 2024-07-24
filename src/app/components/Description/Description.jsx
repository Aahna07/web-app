"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Style.css";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Description = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const handleClick = () => {
    alert("item added");
  };

  return (
    <div className="product-list">
      {data.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <h3 className="product-id">{product.id}</h3>
          <h4 className="product-title">{product.title}</h4>
          <h4 className="product-price">${product.price}</h4>
          <Button
            onClick={handleClick}
            variant="contained"
            endIcon={<AddShoppingCartIcon />}
          >
            Add To Cart
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Description;
