import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import data from "./db/data";
import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //inpout filter

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  //getting all prods from data.js
  const filteredItems = data.filter((prod) => {
    return prod.title.toLowerCase().indexOf(query.toLowerCase() !== -1);
  });

  //radio filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //buttons filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // main filtering
  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    //Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }, id) => (
        <Card
          key={id}
          img={img}
          title={title}
          start={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const result = filteredData(data, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
