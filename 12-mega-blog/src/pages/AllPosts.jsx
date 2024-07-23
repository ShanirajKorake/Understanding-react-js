import React, { useEffect } from 'react'
import { services } from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPosts() {
    const [posts, setPosts] = React.useState([])
    useEffect(() => {
        services.getPosts()
        .then(response => {
            if (response) {
            setPosts(response.documents)
            }        
        })
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts