import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`} className="block">
        <article className='card hover:scale-105 transition-transform duration-300'>
            <div className='w-full mb-4 overflow-hidden rounded-lg'>
                <img 
                    src={appwriteService.getFilePreview(featuredImage)} 
                    alt={title}
                    className='w-full h-48 object-cover transition-transform duration-300 hover:scale-110' 
                />
            </div>
            <div className="card-content">
                <h2 className='heading-tertiary text-lg mb-2 line-clamp-2'>{title}</h2>
                <p className="text-small text-neutral-600">Click to read more...</p>
            </div>
        </article>
    </Link>
  )
}


export default PostCard