const URL_ROOT = 'http://localhost:3000/users'
const headers = () => {
    return ({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer: ${localStorage.getItem('token')}`
    })
  }

const fetchData = () => {
    return fetch(`${URL_ROOT}/${parseInt(localStorage.getItem('userId'))}`)
    .then(res => res.json(), {
        headers: headers()
    })
}

const postIntrovert = (postData) => {
    fetch('http://localhost:3000/introverts', {
        method: 'POST', 
        headers: headers(),
        body: postData})
        .then(res=>res.json())
}

export const services = { 
    fetchData
}