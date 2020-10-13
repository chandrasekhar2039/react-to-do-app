import React from "react";


function Input(prop){

let [state, setsate]=React.useState({
  title:"",
  content:""
});

function change(event){
var {name,value}=event.target;

setsate(pre=>{
  return{
    ...pre,
 [name]:value
  }
});

}

return(
<form>
<input type="text" placeholder="Title" autoComplete="off" onChange={change}  name="title" value={state.title} required />
<textarea name="content" placeholder="Take a note..." rows="3" autoComplete="off" onChange={change} value={state.content} required/>
<button type="button" onClick={()=>{return prop.click(state)}}>Add</button>
</form>

);
}

export default Input;
