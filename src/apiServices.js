const URL_ROOT = 'http://localhost:3000'
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

const postIntrovert = (postData) => {
    return fetch(`${URL_ROOT}/introverts`, {
        method: 'POST', 
        headers: headers(),
        body: postData})
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

export const services = { 
    fetchData,
    postIntrovert,
    postHangout,
    signIn
}