import React from 'react';

function Cards(props){
return ( <div className="note">
  <h1>{props.heading}</h1>
  <p>{props.para} </p>
  <button onClick={()=>{props.del(props.id)}}>Delete</button>
  </div>
);
};

export default Cards;
