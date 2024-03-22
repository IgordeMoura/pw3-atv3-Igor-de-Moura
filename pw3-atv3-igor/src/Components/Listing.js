import { useState, useEffect } from 'react';
import axios from "axios";

function Listing(){

    const[users,setUsers] = useState ([]);

    useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
        console.log(response);
        setUsers(response.data.data);
        })
        .catch(error=>{
        console.log(error);
        });
    },[]);


    return(
        <p>teste</p>
    );
}

export default Listing;