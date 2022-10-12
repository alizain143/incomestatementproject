import React from "react";

export default function Search({handleChange }) {
 
  return (
    <div>
      <form  action="" className="form-search">
        <input type="text" placeholder="You can search transactions" onChange={(e)=>{handleChange(e.target.value)}} />
        <input type="Submit" value="Search" />
      </form>
    </div>
  );
}
