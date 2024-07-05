import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  event.preventDefault();
  const [items, setItems] = React.useState([]);

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function addItem(title, content) {
    setItems((prevItems) => {
      return [...prevItems, { title: title, content: content }];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {items.map((todoItem, index) => (
        <Note
          key={index}
          id={index}
          title={todoItem.title}
          content={todoItem.content}
          ondelete={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
