import axios from 'axios'

const instanse = axios.create({
    baseURL: 'https://burger-d6e6c.firebaseio.com/',
})

export default instanse
