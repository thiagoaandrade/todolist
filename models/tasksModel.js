const connection = require('./connection')

// Get all or just one task
const getTasks = async (id) => {
    let query = "SELECT * FROM tasks "
    if(id){
        query += `WHERE id = $1`
    }

    const tasks = await connection.query(query, id ? [id] : [])
    return tasks.rows
}

const createTask = async (title) => {
    const query = 'INSERT INTO tasks( title, status ) VALUES( $1, $2 ) RETURNING *'

    const newTask = await connection.query(query, [title, 'Not completed'])
    return newTask.rows
}

const updateTask = async (id, task) => {
    const { title, status } = task
    const query = 'UPDATE tasks SET title=$1, status=$2 WHERE id=$3 RETURNING *'

    const updatedTask = await connection.query(query , [title, status, id])

    return updatedTask.rows
}

const deleteTask = async (id) => {
    const deletedTask = await connection.query('DELETE FROM tasks WHERE id=$1', [id])
    return deletedTask
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}