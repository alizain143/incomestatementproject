import React from "react";

export default function Updates() {
  return (
    <div className="updates">
      <h1>Updates</h1>
      <div className="updform-d">
        <form action="" >
          <div>
            <label htmlFor="">Transation Type*</label>
            <br />
            <select name="select-upd" id="" required>
              <option value="">--Select a Transaction Type--</option>
              <option value="">Expense</option>
              <option value="">Income</option>
            </select><br />
          </div>
          <div>
            <label htmlFor="">Name*</label><br />
             <input type="text"  placeholder="With whom did this transaction took place ?"/><br />
          </div>
           <div>
             <label htmlFor="">Amount*</label><br />
             <input type="number" placeholder="How much did you paid or recieved ?" /><br />
           </div>
           <div>
             <label htmlFor="">Comments <span style={{color:"rgba(0,0,0,0.6)" ,fontSize:"0.9rem"}}>(optional)</span></label><br />
             <input type="text" placeholder="Any additonal comments regarding the transaction !" />
           </div>
           <input type="submit" value="Update"/>
        </form>
      </div>
    </div>
  );
}
