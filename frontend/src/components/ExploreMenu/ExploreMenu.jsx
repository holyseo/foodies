import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the ingredients and culinary expertise. Our mission is to
        satisfy your cravings and elevate your dinining experience, one
        delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((menu, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === menu.menu_name ? "All" : menu.menu_name
              )
            }
            className="explore-menu-list-item"
            key={index}
          >
            <img
              className={category === menu.menu_name ? "active" : ""}
              src={menu.menu_image}
              alt=""
            />
            <p>{menu.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
