import { useState } from 'react';
import axios from 'axios';

function Creating(){    
   
    const [tittle, setTittle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState("");
    
    function Creating(event){
    
        event.preventDefault();
    
        let user = JSON.stringify({tittle:tittle, body:body, userId:userId});
        // console.log(user);
    
        axios.post('https://jsonplaceholder.typicode.com/posts', user)
        .then((response)=>{
            console.log(response);
            // alert(response);
        })
        .catch((error)=>{
            console.log(error);
            // alert(error);
        });
    
    }

    return(
        <form onSubmit={Creating} className='form'>
                
            <h1>Creating</h1>
    
            <input
                type='text'
                placeholder='Digite um Tittle'
                value={tittle}
                onChange={(event)=>{setTittle(event.target.value)}}
            />
    
            <input
                type='text'
                placeholder='Digite um body'
                value={body}
                onChange={(event)=>{setBody(event.target.value)}}
            />
    
            <input
                type='text'
                placeholder='Digite um UserId'
                value={userId}
                onChange={(event)=>{setUserId(event.target.value)}}
            />
    
            <button type='submit'>CADASTRAR</button>
                
        </ form>
    );
}

export default Creating;