import axios from 'axios'

export const studentsApi={
    url:'http://127.0.0.1:8000/api/all-users/',
    get:async()=>{
        const res = await axios.get(studentsApi.url)

        return await res.data
    }

}