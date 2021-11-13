import React from "react";
import ReactDOM from "react-dom";

//Css
import "./index.css";
//setup vars

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/515Y-kC7EQL._SX310_BO1,204,203,200_.jpg",
    title: "The Blue Umbrella",
    author: "Ruskin Bond",
    alt: "The Blue Umbrella",
  },

  {
    id: 2,
    img: "https://images-eu.ssl-images-amazon.com/images/I/51Zky37XqoL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Young Pandavas Book 2: The School For Warriors",
    author: "Anupam Arunachalam",
    alt: "Young Pandavas 2",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51BxuGY8DDL._SX386_BO1,204,203,200_.jpg",
    title: "Space - My Knowledge Book",
    author: "Pegasus Team and Yes",
    alt: "Space - My Knowledge Book",
  },
];

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

  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Test Example
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
