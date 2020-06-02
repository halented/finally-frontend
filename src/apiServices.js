const URL_ROOT = 'http://localhost:3000'
// http://localhost:3000
// https://finally-backend.herokuapp.com
const headers = () => {
    return ({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer: ${localStorage.getItem('token')}`
    })
  }

const signIn = (postData) => {
    return fetch(`${URL_ROOT}/auth`, {
            method: 'POST',
            headers: headers(),
            body: JSON.stringify(postData)
        })
        .then(res=>{
            return res.json()
        })
}

const fetchData = () => {
    return fetch(`${URL_ROOT}/users/${parseInt(localStorage.getItem('userId'))}`)
    .then(res => res.json(), {
        headers: headers()
    })
}

const fetchChartData = (year) => {
    return fetch(`${URL_ROOT}/users/${parseInt(localStorage.getItem('userId'))}/chart`, {
        method: 'POST', 
        headers: headers(),
        body: JSON.stringify({year: year})
    })
    .then(res=> {
        return res.json()
    })
}

const postIntrovert = (postData) => {
    return fetch(`${URL_ROOT}/introverts`, {
        method: 'POST', 
        headers: headers(),
        body: postData})
        .then(res=>{
            return res.json()
        })
}

const updateIntrovert = (postData) => {
    return fetch(`${URL_ROOT}/introverts/${postData.id}`, {
        method: 'PUT', 
        headers: headers(),
        body: JSON.stringify(postData)})
        .then(res=>{
            return res.json()
        })
}

const postHangout = (postData) => {
    return fetch(`${URL_ROOT}/hangouts`, {
        method: 'POST', 
        headers: headers(),
        body: postData})
        .then(res=>{
            return res.json()
        })
}

const fetchHangout = (id) => {
    return fetch(`${URL_ROOT}/hangouts/${id}`, {
        method: 'GET', 
        headers: headers()})
        .then(res=>{
            return res.json()
        })
}

export const services = { 
    fetchData,
    postIntrovert,
    postHangout,
    signIn,
    fetchChartData,
    fetchHangout,
    updateIntrovert
}