import React from "react";
import styles from "./testomonial.module.css";
import TestimonialCard from "./testominal";

const testimonials = [
  {
    image: "/rating.jpg",
    name: "Ruchi Gupta",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4,
  },
  {
    image: "/rating.jpg",
    name: "Aneesh Mehta",
    review: "Vestibulum ornare mauris consectetur mollis venenatis.",
    rating: 5,
  },
  {
    image: "/rating.jpg",
    name: "Maya Rai",
    review: "Nullam venenatis dolor nec ligula consequat interdum.",
    rating: 4,
  },
  {
    image: "/rating2.jpg",
    name: "Maya Rai",
    review: "Nullam venenatis dolor nec ligula consequat interdum.",
    rating: 4,
  },
  {
    image: "/rating2.jpg",
    name: "Maya Rai",
    review: "Nullam venenatis dolor nec ligula consequat interdum.",
    rating: 4,
  },
  {
    image: "/rating.jpg",
    name: "Maya Rai",
    review: "Nullam venenatis dolor nec ligula consequat interdum.",
    rating: 4,
  },
];

const TestimonialContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      {testimonials.map((t, index) => (
        <TestimonialCard key={index} {...t} />
      ))}
    </div>
  );
};

export default TestimonialContainer;
