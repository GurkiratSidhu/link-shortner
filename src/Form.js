import React from 'react'
import './App.css';

function Form() {
    return (
        <div className='body' >
            <form className='center'>
              <h1>Link Shortner</h1>
              <input className='input' placeholder="Enter URL here" type="text" name="Enter URL"></input>
             <input className='button' type="submit" value="Shorten"></input>
             </form>
        </div>
    )
}

export default Form
