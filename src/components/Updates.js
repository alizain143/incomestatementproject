import React from "react";
import { connect } from "react-redux";
import { tranAmount, tranComments, tranName, tranType } from "../Reducer";

function Updates(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="updates">
      <h1>Updates</h1>
      <div className="updform-d">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="">Transation Type*</label>
            <br />
            <select
              name="select-upd"
              id=""
              required
              onChange={(e) =>
                props.tranType(e.target.selectedOptions[0].innerText)
              }
            >
              <option value="">--Select a Transaction Type--</option>
              <option value="">Expense</option>
              <option value="">Income</option>
            </select>
            <br />
          </div>
          <div>
            <label htmlFor="">Name*</label>
            <br />
            <input
              type="text"
              placeholder="With whom did this transaction took place ?"
              onChange={(e) => props.tranName(e.target.value)}
            />
            <br />
          </div>
          <div>
            <label htmlFor="">Amount*</label>
            <br />
            <input
              type="number"
              placeholder="How much did you paid or recieved ?"
              onChange={(e) => props.tranAmount(e.target.value)}
            />
            <br />
          </div>
          <div>
            <label htmlFor="">
              Comments{" "}
              <span style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.9rem" }}>
                (optional)
              </span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Any additonal comments regarding the transaction !"
              onChange={(e) => props.tranComments(e.target.value)}
            />
          </div>
          <input type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
}
const mapstatetoProps = (gState) => {
  return gState;
};
const mapDispatchtoProps = { tranAmount, tranComments, tranName, tranType };

export default connect(mapstatetoProps, mapDispatchtoProps)(Updates);
