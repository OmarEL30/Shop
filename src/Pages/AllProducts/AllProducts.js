import './AllProducts.css';
import  Header  from '../../Component/Header/Header';
import React, { useEffect, useState } from 'react'
import {FaRegHeart} from 'react-icons/fa'
const AllProducts= () =>{
<Header></Header>
    const [active, setactive] = useState(1);
    const [data, setdata] = useState ([])
    const [loading, setloading] = useState(false);

    const getPosts = async() => {
        
        setloading(true);
        const response = await fetch('https://dummyjson.com/users')
        const json = await response.json();
        setdata(json.users?.filter((post) => post.id <=12))
        setloading(false)
    }
    useEffect(()=>{
getPosts()
    },[])
        return(
            <div className='main-Products'>
        <h1>All Products</h1>
        <div className='main-users'>
                {loading && <li>Loading...</li>}
                {data.map((users) =>(
                    
                    <div key={users.id} className='users-pro'>
                    <button><FaRegHeart/></button>
                        <img src={users.image} alt={users.title}/>
                    <div>
                        <h2>{users.firstName}</h2>
                        <p>{users.age}</p>
                    </div>
                        <p>{users.email}</p>
                    
                    </div>
                ))}
            </div>
            
    </div>
    )
}
export default AllProducts