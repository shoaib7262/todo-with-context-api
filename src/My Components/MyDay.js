import React, {useContext}  from 'react'
import Header from './Header'
import {daysData} from '../App'

const MyDay = () => {
  const todoItem = useContext(daysData);
  
  return (
    <div className="todoItems">
        <Header name="My Day" />
        {todoItem.map((item, id) => {
          return (
            <div key={item.id} >
              <div className="outer-card mx-2 my-2">
                <div className="card mx-2">
                  <div className="card-body">
                    <div className="dotedBorder">
                      <div>
                        <h6  className="card-title d-inline" id="card-title">
                          {item.Title}
                        </h6>
                      </div>
                      <div className="closeDiv">
                        <i  className="btn fa-solid fa-xmark"></i>
                      </div>
                    </div>

                    <p  className="card-text" id="card-discription">
                      {item.Discription}
                    </p>
                    <div className="iconDiv">
                      <div className="inerDiv">
                        <div>
                          <button id="heartIcon">
                             <i className="fa-regular fa-heart"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
  )
}

export default MyDay