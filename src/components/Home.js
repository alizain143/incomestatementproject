import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import Search from "../reusableComponents/Search";
import { snap } from "./FirebaseFuncs";

export default function Home() {
  let color;
  let icon;

  const [data, setdata] = useState();
  const [value, setValue] = useState();
  const [user, setuser] = useState();
  const trancollection = collection(db, "transactionData");
  let selectdata = data;
  useEffect(() => {
    return () => {
      snap(trancollection, setdata);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userFounded = data.find((e) => {
      return e.name.toUpperCase() === value.toUpperCase();
    });

    onSnapshot(doc(db, "transactionData", userFounded.id), (doc) => {
      setuser([doc.data()]);
    });
  };
  const handleChange = (value) => {
    setValue(value);
  };

  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  return (
    <div className="home">
      <p>
        {date} , {time}
      </p>
      <h1>Hello,Name</h1>
      <div className="home-div">
        <div className="transactions">
          <h2>RECENT TRANSACTIONS</h2>
          <Search handleChange={handleChange} handleSubmit={handleSubmit} />

          {selectdata &&
            selectdata

              .sort((a, b) => {
                return new Date(a.timeinms) > new Date(b.timeinms);
              })
              .slice(0, 4)
              .map((e) => {
                if (e.type === "Expense") {
                  color = "red";
                  icon = faMinus;
                } else {
                  color = "rgb(0, 212, 0)";
                  icon = faPlus;
                }

                return (
                  <div key={e.id} className="rec-trans-div">
                    <div className="rec-t-in-div">
                      <p>
                        {" "}
                        <FontAwesomeIcon
                          className="plus-icon fa-lg"
                          icon={icon}
                          style={{ color: color }}
                        />
                      </p>
                      <div className="rec-trans">
                        <h3>{e.name}</h3>
                        <p>{e.date}</p>
                      </div>
                    </div>
                    <p style={{ color: color }}> {`${e.amount}`}</p>
                  </div>
                );
              })}
        </div>
        <div className="balance">
          <h2>BALANCE</h2>
          <h3>Current Month</h3>
        </div>
      </div>
    </div>
  );
}
