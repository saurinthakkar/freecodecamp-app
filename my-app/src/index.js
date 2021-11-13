import React from "react";
import ReactDOM from "react-dom";

//Css
import "./index.css";
//setup vars

import { books } from "./books";

//const names = ["saurin", "raj", "james"];
// const newNames = names.map((newName) => {
//   return <h1>{newName}</h1>;
// });
//console.log(newNames);
function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // console.log(props);
  // const { img, title, author } = props;
  const clickHandler = () => {
    alert("Hello World");
  };

  const complexExample = (e) => {
    console.log(e);
    console.log(e.target);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt=""></img>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Test Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Complex Example
      </button>
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
