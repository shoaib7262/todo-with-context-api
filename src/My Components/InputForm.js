import React, {useContext} from 'react'
import { useState } from 'react';
import {allData} from '../App'
const InputForm = () => {
  const [Title, setTitle] = useState('');
  const [Discription, setDiscription] = useState('');
  
  const {addTasks} = useContext(allData);

  const onSubmit =()=>{

  let data = {
    id: new Date().getTime(),
    Title,
    Discription,
    liked:false
  }
  addTasks(data)
}
  
  return (
    <>
    <div>
    <div className="mx-5 my-5">
      <div className="mb-3">
        <label className="form-label label">
          Title
        </label>
        <input
          type="text"
          className="form-control rounded"
          id="title"
          placeholder="Enter the title"
          value={Title}
          onChange={(e)=>setTitle(e.target.value)}
          
        />
      </div>
      <div className="mb-3">
        <label className="form-label label">
          Discription
        </label>
        <textarea
          className="form-control rounded"
          id="discription"
          rows="3"
          placeholder="Enter discription"
          value={Discription}
          onChange={(e)=>setDiscription(e.target.value)}
        
          
        ></textarea>
      </div>
      <div className="form-check">
        <input
          className="form-check-input rounded"
          type="checkbox"
          value=""
          id="flexCheckDefault"
       
        />
        <label className="form-check-label" >
          important
        </label>
      </div>
      <div className="mx-5">
      <button type="button" className="btn btn-outline-danger rounded " onClick={onSubmit}>Submit</button>
      </div>
      
    </div>

    
    
  </div>
    
    
    </>
  )
}

export default InputForm