import React from "react";
import ReactDOM from "react-dom";

//Css
import "./index.css";
//setup vars

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/515Y-kC7EQL._SX310_BO1,204,203,200_.jpg",
    title: "The Blue Umbrella",
    author: "Ruskin Bond",
    alt: "The Blue Umbrella",
  },

  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/51Zky37XqoL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Young Pandavas Book 2: The School For Warriors",
    author: "Anupam Arunachalam",
    alt: "Young Pandavas 2",
  },
];

function BookList() {
  return <section className="booklist">{books}</section>;
}

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World")
//   );
// };

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World");
// };

// function Greeting() {
//   return <h2>hello World</h2>;
// }

ReactDOM.render(<BookList />, document.getElementById("root"));
