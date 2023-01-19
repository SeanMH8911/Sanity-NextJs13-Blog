'use client'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useState } from 'react'
import Header from './Header'


function Comment({post}: Post) {
    
    const [submitted, setSubmitted]= useState(false)
    const { register, handleSubmit, formState:{errors}} = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        await fetch('/api/createComment', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(() => {
            console.log(data);
            setSubmitted(true)
        }).catch ((err) =>{
            console.log(err);
            setSubmitted(false)
            
        })
    }

    
  return (
    <main>
        <hr className='max-w-lg my-5 mx-auto border border-purple-700' />
        
            {submitted ? (
                <div className='flex flex-col p-10 my-10 bg-purple-400 text-white max-w-2xl mx-auto'>
                    <h3 className='text-3xl font-bold'>Thank you for submitting your comment</h3>
                    <p>Once approved, it will appear below!</p>
                </div>
            ):(
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-5 max-w-2xl mx-auto mb-10'>
            <h3 className='text-sm text-purple-700'>Enjoyed this article?</h3>
            <h4 className='text-3xl font-bold'>Leave a comment below!</h4>
            <hr className='py-3 mt-2'/>
            
            <input {...register("_id")}
            type="hidden"
            name="_id"
            value={post._id} />

            <label htmlFor="">
                <span className='text-gray-700 '>Name</span>
                    <input  
                    {...register("name", {required:true})}
                    className='shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-purple-500 outline-none focus:ring' placeholder='John Appleseed' type="text" />
            </label>
            <label htmlFor="">
                <span className='text-gray-700'>Email</span>
                    <input 
                    {...register("email", {required:true})}
                    className='shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-purple-500 outline-none focus:ring' placeholder='John Appleseed' type="email" />
            </label>
            <label  htmlFor="">
                <span className='text-gray-700'>Comment</span>
                <textarea 
                {...register("comment", {required:true})}
                className='shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-purple-500 outline-none focus:ring' placeholder='Write your comment here' rows={8}></textarea>
            </label>
            <div className='flex flex-col p-5'>
                {errors.name && (
                    <span className='text-red-500'>- The Name Field is required</span>
                )}
                {errors.email && (
                    <span className='text-red-500'>- The Email Field is required</span>
                )}
                {errors.comment && (
                    <span className='text-red-500'>- The Comment Field is required</span>
                )}
            </div>
            <input type="submit" className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer' />
        </form>
            )}

    </main>
  )
}

export default Comment

