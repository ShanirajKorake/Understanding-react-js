import React from 'react'
import { useParams } from 'react-router-dom'

function User(props) {
    const {userid} = useParams()
    return (
        <div>user:{props.name}{userid}</div>
    )
}

export default User
