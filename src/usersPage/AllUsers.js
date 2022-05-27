import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AllUsers = () => {


const[users,setUsers]=useState([])
const url="https://jsonplaceholder.typicode.com/users";
const fetchData=()=>{
  fetch(url)
  .then(res=>res.json())
  .then(data=>setUsers(data))
  console.log(users)
}
useEffect(() => {
 fetchData();
}, [])
  return (
    
    <Main>
      <h2>Users List</h2>
      <div className='main'>
      {users.map((user)=>(
        <Link to={`/creatures/${user.id}`} key={user.id} className="User-list">
        
          <nav>{user.id}</nav>
          <div className='user-list2'>
            <div className='name-zone'>
              <span>{user.id}</span>
              <h4 className="link">{user.name}</h4>
          </div>
          <div className='more-info'>
          <h5><span>Zip code : </span>{user.address.zipcode}</h5>
          <h5><span>City : </span>{user.address.city}</h5>
          </div>
        </div>
      </Link>
      ))}
      
      </div>
    </Main>
  )
}

export default AllUsers
const Main=styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center ;
flex-direction:column;

.main{
width:100%;
max-width:1250px;
padding:1rem 0.5rem;
display:flex;
justify-content:space-around;
flex-wrap:wrap;
background-color:#F7F7F7;
}
.User-list{
  flex:1 2 260px;
  text-align:center;
  display:flex;
  flex-direction:column ;
  padding:0.5rem 0.5rem ;
  position:relative;
  text-decoration:none;
  
  nav{
    width:40px;
    height:20px;
    background-color:#FF2D31;
    position:absolute;
    right:0;
    
  }
}
.user-list2{
  border:1px solid gray;
  border-bottom-left-radius:1rem;
  width:100%;
  padding:1rem 0.5rem;
  cursor: pointer;
  background-color:white;
  transition:0.3s ease-in-out;
  
  :hover{
    box-shadow:0px 3px 9px gray;
  }
  .more-info{
    width:100%;
    text-align:left;
    padding:0.5rem 3rem;
    h5{
    color:gray;
    span{
      color:darkgray;
    }
  }
  }
}
.name-zone{
  display:flex;
  width:100%;
  align-items:center;
.link{
  margin-left:1rem;
  text-decoration:none;
  font-weight:bold;
  color:black;
}
  span{
    border-radius:50%;
    background-color:#8E00D1;
    width:30px;
    height:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    
  }
  

}
`;