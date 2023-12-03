import axios from 'axios';

export const userRegister = async (userRegisterData) => {
    return await axios.post(
        `http://localhost:5000/register`,
        { userRegisterData }
    )
}

export const userLogin = async (userLoginData) => {
    return await axios.post(
        `http://localhost:5000/login`,
        { userLoginData },
    )
}

export const homePage = async (authToken) => {
    return await axios.get(
        `http://localhost:5000/home`,
        {authToken},
    )
}

