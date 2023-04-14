import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then((data) => {
            console.log('data-->', data);
            setToDo(data.data)
        })
}

const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

const updateToDo = (toDoId, text) => {
    return axios
        .post(`${baseUrl}/update`, { _id: toDoId, text })

}

const deleteToDo = (toDoId) => {
    return axios
        .post(`${baseUrl}/delete`, { _id: toDoId })
}

export { getAllToDo, addToDo, updateToDo, deleteToDo }