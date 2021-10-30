import React from "react";
import ReactDOM from "react-dom";

//Css
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/51Zky37XqoL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt="Young Pandavas 2"
  ></img>
);

const Title = () => <h1>Young Pandavas Book 2: The School For Warriors</h1>;
const Author = () => <h4>Anupam Arunachalam</h4>;

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
