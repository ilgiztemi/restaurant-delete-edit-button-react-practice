import { useState } from "react";

const Menu = ({ newMenu, setNewMenu }) => {
  const [text, setText] = useState("");

  // const handleDelete = (id) => {
  //   const items = [...newMenu];
  //   const newItems = items.filter((el) => el.id !== id);
  //   setNewMenu(newItems);
  // };
  return (
    <div>
      {newMenu.map((el) => (
        <div className="card" key={el.id}>
          <img src={el.img} alt="food" />
          <div className="food">
            <h3>
              {el.title} <span id="price">$ {el.price}</span>
            </h3>
            <p>{el.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Menu;
