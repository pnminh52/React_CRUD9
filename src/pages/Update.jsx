import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Update = ({ products, onUpdate }) => {
  const { id } = useParams();
  const crtPrd = products.find((item) => item.id == id);
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const [inputValue, setInputValue] = useState({});
  const onEventUpdate = (e) => {
    e.preventDefault();
    const updateData = { ...crtPrd, ...inputValue };
    onUpdate(updateData);
  };
  return (
    <>
      <div>
        <h1>Update products</h1>
        <form action="" onSubmit={onEventUpdate}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onInput={onChange}
            defaultValue={crtPrd?.name}
          />

          <input
            type="number"
            name="price"
            placeholder="price"
            onInput={onChange}
            defaultValue={crtPrd?.price}
          />

          <input
            type="text"
            name="description"
            placeholder="description"
            onInput={onChange}
            defaultValue={crtPrd?.description}
          />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Update;
