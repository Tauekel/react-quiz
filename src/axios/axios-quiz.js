import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-5fc3b.firebaseio.com/'
})