import axios from 'axios';
import React, { useState, useRef } from 'react'

const URL = "https://randomuser.me/api"

const FetchUserData = () => {
    const [usersData, setUsersData] = useState([]);
    const pageNumber = useRef(0)

    const fetchUserData =  () =>{
        const page = pageNumber.current;
        axios.get(`${URL}?page=${page}`)
        .then(({ data }) => {
            if (data === undefined) return;
            setUsersData((prevData) => [...prevData, data.results[0]])
        })
        .catch((error) => {
            console.log(error)
        });
        pageNumber.current = page + 1
    }

    return (
        <>
            <button type="button" onClick={fetchUserData} >Load Data</button>
            <pre>
                {usersData.map((user) => 
                    <div key={user.id.value} style={{ paddingTop: '2rem' }}>
                        <img src={user.picture.medium} alt={`${user.name.title} ${user.name.first} ${user.name.last}`} />
                        <p>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
                    </div>
                )}
            </pre>
        </>
    )
}

export default FetchUserData