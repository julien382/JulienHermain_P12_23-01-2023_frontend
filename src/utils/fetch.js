import Activity from "../type/Activity.js"

const server = "http://localhost"
const port = "3000"

export const getUser = async (userId) => {
    try {
        const result = await fetch(`${server}:${port}/user/${userId}`)
        const data = await result.json()

        return data.data
    } catch (error) {
        console.log(error);
    }

}


/**
 * @param {number} userId 
 * @returns {(Promise<Activity[]>| null)}
 */
export const getActivity = async (userId) => {
    try {
        const result = await fetch(`${server}:${port}/user/${userId}/activity/`)
        const data = await result.json()

        const resultActivity = data.data.sessions.map((activity) => {
            return new Activity({...activity})
        })

        return resultActivity

    } catch (error) {
        console.log(error);
    }
}

export const getSessions = async (userId) => {
    try {
        const result = await fetch(`${server}:${port}/user/${userId}/average-sessions/`)
        const data = await result.json()

        return data.data
    } catch (error) {
        console.log(error);
    }

}




/**
 * @param {number} userId 
 * @returns {(Performance[]| null)}
 */
export const getPerformance = async (userId) => {
    try {
        const result = await fetch(`${server}:${port}/user/${userId}/performance/`)
        const data = await result.json()

        console.log(data.data);

        return data.data
    } catch (error) {
        console.log(error);
    }

}
