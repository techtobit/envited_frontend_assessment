import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
import Img from '../../assets/Event image.png'


const EventPage = () => {
 var retrievedObject = localStorage.getItem('createEvent');

 const newData = JSON.parse(retrievedObject);
 console.log(newData.eventName);


 return (
  <div className='grid grid-cols-2 justify-between items-center px-20 py-20'>
   <div className="event-dat ">
    <h2 className='text-5xl font-bold text-primary'>{newData.eventName}</h2>
    <div>
     <p className='text-xl font-medium'>{newData.sateDate}</p>
     <p className='text-xl font-medium'>{newData.Location}</p>
     <p className='text-xl font-medium'>{newData.Description}</p>
    </div>
   </div>
   <div className="event-img hidden lg:inline-flex ">
    <img className='rounded-lg w-96' src={Img} alt="" />
   </div>
  </div>
 );
};

export default EventPage;