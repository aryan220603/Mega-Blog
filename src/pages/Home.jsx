import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Container>
                    <div className="text-center slide-up">
                        <div className="mb-8">
                            <h1 className="heading-primary gradient-text mb-4">
                                Welcome to MegaBlog
                            </h1>
                            <p className="text-body text-xl mb-8 max-w-2xl mx-auto">
                                Discover amazing stories, share your thoughts, and connect with writers from around the world.
                            </p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-md mx-auto">
                            <h2 className="heading-secondary mb-4">Get Started</h2>
                            <p className="text-body mb-6">
                                Sign in to start reading and writing amazing blog posts.
                            </p>
                            <div className="space-y-3">
                                <a href="/login" className="btn btn-primary w-full">
                                    Sign In
                                </a>
                                <a href="/signup" className="btn btn-secondary w-full">
                                    Create Account
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='py-12'>
            <Container>
                <div className="text-center mb-12 slide-up">
                    <h1 className="heading-primary gradient-text mb-4">Latest Posts</h1>
                    <p className="text-body text-lg">Discover the latest stories from our community</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {posts.map((post) => (
                        <div key={post.$id} className="fade-in">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home