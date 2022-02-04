import {React,useState} from 'react';
import "./DealOfTheDay.css"

function DealOfTheDay(props) {
    const prods = props.prod.dealsOfTheDay;
    const[summery,setSummery] = useState('');
       console.log(summery);
    

    
    const handelClick = ((e) => {
         
         prods.forEach(element => {
             if (e.target.src === element.imgUrl){
                 setSummery([element.title]);
                 console.log("clicked");
                 console.log(element.title);

             }
             e.preventDefault();
             fetch('http://localhost:8002', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                     "title": summery
                })
             });
         });
    })

  return (
      <>
      <h1> Deals Of The Day</h1>
      <div className="grid-container">
          {prods.map((prod,index) => (
              <div key={index} className="grid-item" onClick={handelClick}>
                  <img src={prod.imgUrl} alt="" height={400} width={250}/>
              </div>
          ))}
      </div>
      </>  
  )
}

export default DealOfTheDay;
