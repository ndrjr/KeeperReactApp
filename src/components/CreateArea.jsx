import React from "react";

function CreateArea(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  function handle(event) {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  }
  return (
    <div>
      <form>
        <input
          name="title"
          value={title}
          onChange={handle}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={content}
          onChange={handle}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={() => {
            props.addItem(title, content);
            setTitle("");
            setContent("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
