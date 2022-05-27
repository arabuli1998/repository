import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';

const SingleUser = () => {
    const[user,setUser]=useState([])
    const {id}=useParams();
    console.log({id})
    const fetchDetails=()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>res.json())
        .then(data=>setUser(data))
    }
    useEffect(() => {
        fetchDetails();
    }, [])
  return (
    <Main>
      {/* left col-menu */}
      <div className='menu'></div>

      {/* right col-info */}
      <div className='info'>
        {/* top row -title */}
         <div className='title'>title</div>
        {/* main div info */}
        <div className='info-table'>
          <div className='profile'>
            <div className='profile-child'>
              <div className='avatar'></div>
              <h5>CONTACT</h5>
              <div className='texts'>
                <p><span>Phone: </span>{user.phone}</p>
                <p><span>Email: </span>{user.email}</p>
                <p><span>Website: </span>{user.website}</p>
              </div>
              <Link to={`/creatures/posts/${id}`} className='link'><button>View Posts</button></Link>
              <Link to={`/creatures`} className='link'><button>Come back</button></Link>
            </div>
          </div>
          {/* info's right col*/}
          <div className='about-me'>
            {/* info's first col adress*/}
            <div className='first-col'>
              <h5>My Adress</h5>
              <div className='adress'>
              <p><span>City</span>Citys</p>
              <p><span>Street</span>Streets</p>
              <p><span>suite</span>suitse</p>
              <p><span>zipcode</span>zipcode</p>
            </div>
            </div>
            {/* info's secc col company*/}
            <div className='second-col'>
              <h5>My Company</h5>
              <div className='adress'>
              <p><span>catchPhrase</span>catchPhrases</p>
              <p><span>Name</span>SName</p>
              <p><span>suite</span>suitse</p>
              <p><span>bs</span>bszipcode</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default SingleUser

const Main=styled.div`
width:100%;
display:flex;
justify-content:center;

.info{
  max-width:1000px;
  width:100% ;
  flex-wrap:wrap;
}
  .title{
    width:100%;
    height:100px;
    background-color:white;
  }
  .info-table{
    width:100%;
    background-image:url('https://media.istockphoto.com/photos/dark-gray-and-black-grunge-cement-wall-studio-room-space-product-picture-id1337977426?b=1&k=20&m=1337977426&s=170667a&w=0&h=pXD50PRHzp_VW0Jqc3XVve3lQvKg3d5UnPb8C2urYL4=') ;
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    display:flex;
    border-radius:1rem;
    flex-wrap:wrap ;
    
  }
    .profile{
      flex:1 2 250px;
      padding: 1rem 2rem;
      @media screen and (max-width:950px){
      padding:1rem 1rem;
    }
  }
      
      .profile-child{
        background-color:white;
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        text-align:center;
        border-radius:1rem;
      }
        .avatar{
          width:100%;
          min-height:200px;
          background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&usqp=CAU');
          background-position:center;
          background-size:cover ;
          border-radius:1rem;
        }
        h5{
          padding:1rem 0;
        }
        .texts{
          width:100%;
          padding:1rem 0 ;
          p{
            padding:0.5rem 0.2rem;
            color:green;
            span{
              color:black;
            }
          }
        }
        .link{
          margin-bottom:2rem;
          button{
            padding:0.5rem 0.7rem;
            border:none;
            border-radius:1rem;
            color:white;
            font-weight:500;
            background-image: linear-gradient(to right, #FF3236 , #FF6219);
            transition:0.3s ease-in-out;
            cursor: pointer;
            :hover{
              background-image: linear-gradient(to right,  #FF6219  ,#FF3236);
            }
          }
        }
    .about-me{
      flex:1 2 250px;
      padding: 1rem 2.5rem;
      @media screen and (max-width:950px){
      padding:1rem 1rem;
    }
    }
      .first-col{
        width:100% ;
        height:auto;
        background-color:white;
        border-radius:1rem;
        h5{
          padding:1.2rem 0;
          width:100%;
          border-bottom:0.5px solid gray;
          text-align:center ;
        }
        p{
          display:flex;
          width:100%;
          padding:0.5rem 0.8rem;
          color:green;

          span{
            max-width:90px;
            width:100%;
            color:gray;
          }
        }
      }
      .second-col{
        width:100% ;
        background-color:white;
        border-radius:1rem;
        margin-top:20px;
        width:100% ;
        height:auto;
        h5{
          padding:1.2rem 0;
          width:100%;
          border-bottom:0.5px solid gray;
          text-align:center ;
        }
        p{
          display:flex;
          width:100%;
          padding:0.5rem 0.8rem;
          color:green;

          span{
            max-width:90px;
            width:100%;
            color:gray;
          }
        }
      }
    
  

`;