import React from 'react'
import './App.css';

function Form() {
    return (
        <div className='body' >
            <form className='center'>
              <header><h1>Link Shortner</h1></header>
              <input className='input' placeholder="Enter URL here" type="text" name="Enter URL"></input>
             <input className='button' type="submit" ></input>
             </form>
        </div>
    )
}

export default Form
