import React,{useState,useEffect}from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

const Posts = () => {
    const[user,setUser]=useState([])
    const {id}=useParams();
    console.log({id})
    const fetchDetails=()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>setUser(data))
    }
    useEffect(() => {
        fetchDetails();
    }, [])
  return (
    <Post>
        <h3>{user.title}</h3>
        <p>{user.body}.</p>
        <Link className='button' to={`/creatures/${user.id}`}><button>Come Back</button></Link>
    </Post>
  )
}

export default Posts
const Post=styled.div`
width:100%;
height:100vh;
background-image: linear-gradient(to bottom right, black, red);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h3{
    text-align:center;
    background-image: linear-gradient(to bottom right, red, black);
    padding:0.5rem 0.5rem;
    color:white;
    width:100%;
}
p{max-width:850px;
    text-align:center;
    padding:1rem 0.5rem;
}
.button{
    button{
        border:none;
        background-color:black;
        color:red;
        padding:0.5rem 1rem;
        cursor: pointer;
        border-radius:1rem;
    }
}
`;