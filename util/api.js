import axios from 'axios'

const baseUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8000/api' : 'https://my-todos.com/api'

const api = {
    getAllProjects: function () {
        const url = baseUrl + '/projects'
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios(url)
                if (res.status !== 200) {
                    throw new Error("Bad response code from API while trying to fetch all projects.")
                }
                if (!res.data) {
                    throw new Error("No projects found.")
                }
                resolve(res.data)
            } catch (e) {
                console.error(e)
                reject()
            }
        })
    },
    getProjectAndTodos: function(project_id) {
        const url = `${baseUrl}/projects/${project_id}?get_todos=true`
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios(url)
                if (res.status !== 200) {
                    throw new Error("Bad response code from API while trying to fetch project and todos.")
                }
                if (!res.data) {
                    throw new Error("Project not found.")
                }
                resolve(res.data)
            } catch (e) {
                console.error(e)
                reject()
            }
        }) 
    }
}

export default api