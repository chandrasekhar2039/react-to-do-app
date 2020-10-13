import React from 'react';
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Input from "./components/input";
import Cards from "./props/cards";


function App() {

  let [item, setitem] = React.useState([]);


  function click(state) {
    setitem(pre => {
      return ([...pre, {
        title: state.title,
        content: state.content
      }]);
    });

// reset the input parameters
    state.title = "";
    state.content = "";
  }


  function extract(peritem, index) {
    return <Cards
    key = {index}
    heading = {peritem.title}
    para = {peritem.content}
    id = {index}
    del = {deleteItem}
    />
  }

  function deleteItem(id) {
    setitem((prev) => {
      return prev.filter((per, index) => {
        return index !== id
      });
    })
  }

  return ( <div >
    <NavBar / >
    <Input click = {click} />
      {item.map(extract)}
    <Footer / >
    </div>
  );
}

export default App;
