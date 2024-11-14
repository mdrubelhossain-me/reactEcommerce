import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import p1 from "../../assets/images/products/apple.png";
import p2 from "../../assets/images/products/orange.png";
import p3 from "../../assets/images/products/grapes.png";
import p4 from "../../assets/images/products/watermelon.png";
import p5 from "../../assets/images/products/strawberry.png";

const popularProducts = [
  {
    id: 1,
    imgSrc: p1,
    name: "Juicy Apples - A Healthy, Delicious Anytime Snack",
    category: "fruits",
    // icon: "bi-geo-alt",
    newPrice: 100.0,
    oldPrice: 120.0,
  },
  {
    id: 8,
    imgSrc: p2,
    name: "Juicy Oranges - Sweet, Tangy, and Full of Vitamin C",
    category: "fruits",
    newPrice: 80.0,
    oldPrice: 110.0,
  },
  {
    id: 4,
    imgSrc: p3,
    name: "Sweet, Juicy Grapes - Nature's Perfect Bite-Sized Delight",
    category: "fruits",
    newPrice: 280.0,
    oldPrice: 310.0,
  },
  {
    id: 14,
    imgSrc: p4,
    name: "Cool Watermelon - Perfect for Summer's Sweetest Moments",
    category: "vegetables",
    newPrice: 80.0,
    oldPrice: 110.0,
  },
];

export default popularProducts;
