import React from "react";

const Add = (props) => {
  const { errors, onSubmit, onChange } = props;
  const errLog = errors.map((item) => {
    return { [item.context.label]: item.message };
  });
  const [er1, er2, er3] = errLog;
  return (
    <>
      <div>
        <h1>Add products</h1>
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onInput={onChange}
          />
          <span>{er1?.name}</span>
          <input
            type="number"
            name="price"
            placeholder="price"
            onInput={onChange}
          />
          <span>{er2?.price}</span>
          <input
            type="text"
            name="description"
            placeholder="description"
            onInput={onChange}
          />
          <span>{er3?.description}</span>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Add;
