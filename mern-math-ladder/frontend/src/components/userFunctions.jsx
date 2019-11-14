import axios from 'axios'

export const register = newUser => {  //this newUser came from form of register
    return axios
    .post('http://localhost:5000/users/add', {
        username: newUser.username,
        password: newUser.password,
        email: newUser.email,
        status: "active",
        educator: newUser.educator,
        student: newUser.student
    })
    .then(response => {
        return response
    })
    .catch(err => {
        return err
    })
}

export const login = user => {
    return axios
    .post('http://localhost:5000/users/login', {
        password:user.password,
        email:user.email
    })
    .then(response => {
        localStorage.setItem('token', response.data)
        return response.data
    })
    .catch(err => {
        console.log(err)
    })
}

export const assignmentCreatedByUser = assignment => {
    const token = localStorage.token;
    return axios
    .get('http://localhost:5000/assignment/getAssignmentCreatedByUser', {
        headers: {"Authorization" : `Bearer ${token}`}
    })
    .then(response => {
            return response.data
    })
    .catch(err => {
        console.log(err);
    })
}

export const getAssignment = (parameter) => {
    return axios
    .get('http://localhost:5000/assignment/getAssignments/' + parameter)
    .then(response => {
            return response.data
    })
    .catch(err => {
        console.log(err);
    })
}

export const addAssignment = assignment => {
    const token = localStorage.token;
    var config = {
        headers:  {"Authorization" : `Bearer ${token}`}
    };
    return axios
    .post('http://localhost:5000/assignment/addAssignment', 
        assignment,
        config
    )
    .then(response => {
            return response.data
    })
    .catch(err => {
        console.log(err);
    })
}