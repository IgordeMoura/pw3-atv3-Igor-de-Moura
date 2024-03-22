import { useState, useEffect } from 'react';
import axios from "axios";

function Getting(){

    const[users,setUsers] = useState ([]);

    useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/posts/1')
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

export default Getting;