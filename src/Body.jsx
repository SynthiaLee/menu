import { useState } from "react";

function Body() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [menuList, setMenuList] = useState([]);

  /*function validate() {
    console.log(name.length & price.length);
  };
  */

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePriceChange(e) {
    setPrice(e.target.value);
  }

  function handleKeyDown(e) {
    console.log(e.key);
    if (e.key === "Enter") {
      addMenu();
    }
  }

  function addMenu() {
    /*console.log(name.length);
    console.log(price.length);*/
    // console.log 를 작성하지 않아도 되는건가? 이미 데이터 상에는 있으니까?

    if (name.length > 0 && price.length > 0) {
      if (!isNaN(price)) {
        const newMenu = { name: name, price: price };
        setMenuList([...menuList, newMenu]);
        setName("");
        setPrice("");
        wo;
      } else {
        alert("price is not a number");
      }
    } else {
      alert("please fill in both boxes ;)");
      ``;
    }
  }

  function removeMenu(idx) {
    setMenuList(menuList.filter((menu, i) => i !== idx));
  }

  return (
    <div className="main">
      <div className="type-in">
        <input
          id="menu"
          type="text"
          placeholder="메뉴 입력"
          value={name}
          onChange={handleNameChange}
          onKeyDown={handleKeyDown}
        />
        <input
          id="price"
          type="text"
          placeholder="가격 입력"
          value={price}
          onChange={handlePriceChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addMenu}>추가</button>
      </div>
      <div className="print-out">
        <h2>MENU LIST</h2>
        {menuList.map((menu, idx) => (
          <div className="menu-list">
            <div className="menu">{menu.name}</div>
            <div className="price">{menu.price}</div>
            <button onClick={() => removeMenu(idx)}>삭제</button>
          </div>
          // <MenuItem name={menu.name} price={menu.price} onRemove={() => removeMenu(idx)} />
        ))}
      </div>
    </div>
  );
}

export default Body;
