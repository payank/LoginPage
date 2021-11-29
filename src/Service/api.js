import axios from 'axios';

const usersUrl = 'http://localhost:3002/users';


export const getUsers = async (id) => {
    id = id || '';
    console.log('Paya1', id)

    try {
        let abc =  await axios.get(`${usersUrl}/${id}`);
        return abc;
    } catch(e) {
        return {}

    }
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}