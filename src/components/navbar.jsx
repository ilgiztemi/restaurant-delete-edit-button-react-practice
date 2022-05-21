const Navbar = ({ menu, setNewMenu }) => {
  const handleCategory = (action) => {
    console.log(action);
    if (action === "all") {
      setNewMenu(menu);
    } else {
      const menuCopy = [...menu];
      const filteredMenu = menuCopy.filter((el) => el.category === action);
      setNewMenu(filteredMenu);
    }
  };
  return (
    <div>
      <div className="navbar">
        <h1>Our Menu</h1>
        <div className="btn">
          <button onClick={() => handleCategory("all")}>All</button>
          <button onClick={() => handleCategory("breakfast")}>Breakfast</button>
          <button onClick={() => handleCategory("lunch")}>Lunch</button>
          <button onClick={() => handleCategory("shakes")}>Shakes</button>
          <button onClick={() => handleCategory("dinner")}>Dinner</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
