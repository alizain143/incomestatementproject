import React from "react";

export default function Search({handleChange,handleSubmit }) {
 
  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="form-search">
        <input type="text" placeholder="You can search transactions" onChange={(e)=>{handleChange(e.target.value)}} />
        <input type="Submit" value="Search" />
      </form>
    </div>
  );
}
