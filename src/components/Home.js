import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className='home'>
        <p>date</p>
        <h1>Hello,Name</h1>
        <div className='home-div'>
            <div className='transactions'>
                <h2>RECENT TRANSACTIONS</h2>
                <div className='rec-trans-div'>
                    <div className='rec-t-in-div' >
                        <p > <FontAwesomeIcon className='plus-icon fa-lg' icon={faPlus} /></p>
                        <div className='rec-trans'>
                            <h3>name</h3>
                            <p>date</p>
                        </div>
                    </div>
                    <p style={{color:'rgb(0, 212, 0)'}}> $amount</p>
                </div>
            </div>
            <div className='balance'>
                <h2>BALANCE</h2>
                <h3>Current Month</h3>
            </div>
        </div>
    </div>
  )
}
