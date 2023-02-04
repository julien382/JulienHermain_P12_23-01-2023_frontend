import Activity from "../type/Activity.js"
/*import Sessions from "../type/Sessions.js"
import User from "../type/User.js"
import Performance from "../type/Performance.js"*/

const server = "http://localhost"
const port = "3000"


/**
 * @param {number} userId 
 * @returns {(Promise<User[]>| null)}
 */
export const getUser = async (userId) => {
    try {
        const result = await fetch(`${server}:${port}/user/${userId}`)
        const data = await result.json()
        console.log(data.data);

        /*const resultUser = new User({...data.data.userInfos})
        console.log(data.data.userInfos);
        console.log(resultUser);
        return resultUser*/

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
        console.log(data.data);
        console.log(resultActivity);
        return resultActivity

    } catch (error) {
        console.log(error);
    }
}


/**
 * @param {number} userId 
 * @returns {(Promise<Sessions[]>| null)}
 */
export const getSessions = async (userId) => {
    try {
        const result = await fetch(`${server}:${port}/user/${userId}/average-sessions/`)
        const data = await result.json()
        console.log(data.data);

        /*const resultSessions = data.data.sessions.map((sessions) => {
            return new Sessions({...sessions})
        })

        return resultSessions*/

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