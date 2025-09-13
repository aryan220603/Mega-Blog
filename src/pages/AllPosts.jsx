import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className='py-12'>
            <Container>
                <div className="text-center mb-12 slide-up">
                    <h1 className="heading-primary gradient-text mb-4">All Posts</h1>
                    <p className="text-body text-lg">Browse through all published articles</p>
                </div>
                
                {posts.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="card max-w-md mx-auto">
                            <h3 className="heading-tertiary mb-4">No Posts Found</h3>
                            <p className="text-body mb-6">There are no published posts yet. Be the first to create one!</p>
                            <a href="/add-post" className="btn btn-primary">
                                Create Post
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {posts.map((post) => (
                            <div key={post.$id} className="fade-in">
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </div>
    )
}

export default AllPosts