import React, { useEffect } from 'react';
import a from '../photo/a.jpg';
import photos from '../../data';
import { useState } from 'react';

const Section = () => {

   const[list,setlist] = useState([]);
      
   useEffect(() => {
     
        setlist(photos);
        console.log(list);
    }, []);

  return (
   <React.Fragment>
    <div className="container-fluid p-5">
         <div className="row">

            <div className="col"><img src={a} className='img img-fluid' alt="" srcset="" /></div>

            <div className="col"><img src={a} className='img img-fluid' alt="" srcset="" /></div>

            <div className="col"><img src={a} className='img img-fluid' alt="" srcset="" /></div>


            <div className="col"><img src={a} className='img img-fluid' alt="" srcset="" /></div>

            
         </div>

         <div className="row mt-4">
            
            <div className="col"><img src={a} className='img img-fluid' alt="" srcset="" /></div>

            <div className="col"><img src={a} className='img img-fluid' alt="" srcset="" /></div>

            <div className="col"><img src={a} className='img img-fluid' alt="" srcset="" /></div>


            <div className="col"><img src={a} className='img img-fluid' alt="" srcset="" /></div>

            
         </div>


         <div className="row mt-4">
            
            <div className="col"><img src={a} className='img img-fluid' alt="" srcset="" /></div>

            <div className="col"><img src={a} className='img img-fluid' alt="" srcset="" /></div>

            <div className="col"><img src={a} className='img img-fluid' alt="" srcset="" /></div>


            <div className="col"><img src={a} className='img img-fluid' alt="" srcset="" /></div>

            
         </div>


    </div>
   </React.Fragment>
  )
}

export default Section