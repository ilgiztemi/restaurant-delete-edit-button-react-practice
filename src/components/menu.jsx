import { useState } from "react";

const Menu = ({ newMenu, setNewMenu }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState("");

  const handleDelete = (id) => {
    const items = [...newMenu];
    const newItems = items.filter((el) => el.id !== id);
    setNewMenu(newItems);
  };

  const handleEdit = (object) => {
    setIsEdit(!isEdit);
    const editItem = newMenu.find((item) => item.id === object.id);
    console.log(editItem.text);
    const listCopy = [...newMenu];
    setNewMenu([...listCopy], { text: object.text.value });
  };

  return (
    <div>
      {newMenu.map((el) => (
        <div className="card" key={el.id}>
          <img src={el.img} alt="food" />
          <div className="food">
            <h3>
              {el.title} <span id="price">$ {el.price}</span>
            </h3>
            {isEdit ? (
              <textarea
                onChange={() => handleEdit(el)}
                className="text"
                rows="5"
                cols="25"
                value={el.text}
              ></textarea>
            ) : (
              <p>{el.text}</p>
            )}
            <button onClick={() => handleDelete(el.id)}>delete</button>
            <button onClick={() => handleEdit(el)}>edit</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Menu;
