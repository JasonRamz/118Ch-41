import './createUser.css';
import { useState } from 'react';
import dataService from '../Services/dataService';
function CreateUser(){
    const [user, setUser] = useState({
        name:'',
        phone: '',
        email: '',
        message: '',
    });

    function handleInput(e){
        const value = e.target.value
        const name = e.target.name;

        const copy = { ...user };
        copy[name] = value;
        setUser(copy);
    }

    async function save(){
        let response = await dataService.saveUser(user);
        alert('Your Create a new user');
    }
    return (
        <div className='create-user page'>
            <h1>Create new User</h1>
            <div>
                <div>
                    <label>Name</label>
                    <input name='name' type="text"></input>
                </div>

                <div>
                    <label>Phone</label>
                    <input name='phone'type="text"></input>
                </div>
                
                <div>
                    <label>Email</label>
                    <input name='emtextail' onChange={handleInput} type="text"></input>
                </div>

                <div>
                    <label>Message</label>
                    <textarea name='message' onChange={handleInput} rows={3}></textarea>
                </div>

                <button name='save'>Create User</button>
            </div>
        </div>
    )
}
export default CreateUser