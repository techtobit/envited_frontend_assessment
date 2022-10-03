import React from 'react';
import eventImg from '../../assets/Event image.png'
import { useForm } from "react-hook-form";
import './BookedEvent.css'
import '../LandingPage/LandingPage.css'
import { json, Link, Navigate } from 'react-router-dom';
const BookedEvent = () => {
 const { register, handleSubmit, watch, formState: { errors } } = useForm();
 const onSubmit = data => {
  console.log(data);
  const newData = JSON.stringify(data);
  localStorage.setItem('createEvent', newData);

 }


 return (
  <div className="event-section">
   <div className='grid lg:grid-cols-2 grid-cols-1 py-20 justify-between px-20 gap-10'>
    <div className="event-img lg:hidden inline-flex">
     <img className='rounded-lg' src={eventImg} alt="" />
    </div>
    <div className="event-details w-96 font-medium">
     <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col py-2'>
       <label htmlFor="">What you want to call</label>
       <input className='shadow appearance-none border bg-slate-300  rounded w-full py-2  px-3 text-primary leading-tight focus:outline-none focus:shadow-outline' required placeholder='Event Name' {...register("eventName")} />
      </div>
      <div className='flex flex-col py-2'>
       <label htmlFor="">Set Any Date</label>
       <input className='shadow appearance-none border bg-slate-300 rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline' required placeholder='sateDate' {...register("sateDate")} />
      </div>
      <div className='flex flex-col py-2'>
       <label htmlFor="">Location</label>
       <input className='shadow appearance-none border bg-slate-300 rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline' required placeholder='Location' {...register("Location")} />
      </div>
      <div className='flex flex-col py-2'>
       <label htmlFor="">URL</label>
       <input className='shadow appearance-none border bg-slate-300 rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline ' required placeholder='URL' {...register("Url")} />
      </div>
      <div className='flex flex-col py-2'>
       <label htmlFor="">Description</label>
       <textarea className='shadow appearance-none border bg-slate-300 rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline' required placeholder='Description' {...register("Description")} />
      </div>
      <Link to='/eventOverview' className='flex flex-col py-2'>
       <input className='event-btn cursor-pinter  rounded-lg w-full lg:h-[55px] p-4 text-white font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' value='Create Event' type="submit" />
      </Link>
     </form>
    </div>
    <div className="event-img hidden lg:inline-flex ">
     <img className='rounded-lg' src={eventImg} alt="" />
    </div>
   </div>
  </div>
 );
};

export default BookedEvent;