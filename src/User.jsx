import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function WordUser() {
    const [user, setUser] = useState({ id: 0, Username: '', Password: '' })
    const [userList, setUserList] = useState([{ id: 0, Username: '', Password: '' }])
    const [userReflesh, setUserReflesh] = useState(false);





    const setEkelencekVal = (event) => {

        setUser(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))

    }
    const getUser = () => {
        axios.get('https://localhost:44376/api/Users/')
            //.then((res)=> { return res.json()})
            .then((res) => setUserList(res.data));
    }
    const userAdd = () => {
        axios.post('https://localhost:44376/api/Users', user)
            .then(() => { getUser() });
        setUserReflesh(!userReflesh)
    }
    useEffect(() => {
        getUser()


    }, [userReflesh])

    return (<div >
        {
            userList.map((usr) => {
                return <div key={usr.id}>{usr.id}||{usr.username}||{usr.password}</div>
            })
        }

        <div className='col-md-6'>
            <div className='form-group'>
                username:<input className='form-control' name='Username' type='text' onChange={setEkelencekVal} />
            </div>
            <div className='form-group'>
                password:<input className='form-control' name='Password' type='text' onChange={setEkelencekVal} />
            </div>
            <button onClick={userAdd} >Kaydet</button>
        </div>
    </div>
    );
}