import React from 'react';

 

const Author = (props) => {
       let d = new Date(props.postedDate) 

       const monthNames = ["January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"
];
       let month = monthNames[d.getMonth()]
       let day = d.getDay()
       
        return (
            <div className="card">
              <div>
                <img className="authorImage" src={props.image}></img>
                <div className="authorText">
                  <div className="authorName"> {props.name} </div>
                  <div className="postedDate"> {month} {day} </div>
                  <div className="time to read"> {props.minutesToRead} Min Read </div>
                </div>
              </div>
            </div>
            
        );
    }



export default Author;