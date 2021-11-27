import React, { useState, useEffect, useRef } from "react";
import List from "./List";
import Alert from "./Alert";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function App() {
  const [item, setItem] = useState("");
  const [alert, setAlert] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [alertType, setAlertType] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(0);

  const refFocus = useRef();

  const deleteItem = (id) => {
    const newList = list.filter((item, index) => {
      return index !== id;
    });
    setList(newList);
    showAlert("Item Deleted!", "alert-success");
  };

  const editItem = (id) => {
    console.log(refFocus.current);
    refFocus.current.focus();
    setIsEditing(true);
    setEditId(id);
    const theOne = list[id];
    setItem(theOne);
  };

  const showAlert = (message, type) => {
    setAlert(message);
    setAlertType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      showAlert("Please Enter Value", "alert-danger");
    } else if (isEditing) {
      list[editId] = item;
      setList(list);
      setIsEditing(false);
      setItem("");
      showAlert("Updated!", "alert-success");
    } else {
      showAlert("Item Added!", "alert-success");
      setList([...list, item]);
      setItem("");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert("");
      setAlertType("");
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {/* {alert && <p className={`alert ${alert && alertType}`}>{alert}</p>} */}
        {alert && <Alert alertType={alertType} alert={alert} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            ref={refFocus}
            type="text"
            name="item"
            id="item"
            className="grocery"
            placeholder="eg. Eggs"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>

      {list.length !== 0 && (
        <div className="grocery-container">
          <List list={list} editItem={editItem} deleteItem={deleteItem} />
          <button
            className="clear-btn"
            onClick={() => {
              setList([]);
              showAlert("List Cleared!", "alert-success");
            }}
          >
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
