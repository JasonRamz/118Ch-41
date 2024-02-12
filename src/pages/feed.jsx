import { useState, useEffect } from 'react';
import './feed.css';
import dataService from '../Services/dataService';

function Feed(){
    const [users, setUsers] = useState([]);
    
    async function retrieveUsers(){
        const allUsers = await dataService.getUsers();
        setUsers(allUsers);
    }


    useEffect(function(){
        retrieveUsers();
    }, []);

    return (
        <div className='Feed'>
            <h1> All the Users </h1>

            <div className='list'>
            {users.map((p) => (
            <div className='item'>
                <h3>{p.name}</h3>
                <h2>{p.phone}</h2>
                <h2>{p.email}</h2>
                <p>{p.message}</p>
            </div>
            ))}
                
            </div>
        </div>
    );
}
export default Feed;