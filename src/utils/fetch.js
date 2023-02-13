import ActivityTypes from "../type/ActivityTypes.js"
import SessionsTypes from "../type/SessionsTypes.js"
/*import User from "../type/User.js"
import Performance from "../type/Performance.js"*/

const server = "http://localhost"
const port = "3000"

//const isDev = process.env.NODE_ENV === 'development'


/**
 * @param {number} userId 
 * @returns {(Promise<UserTypes[]>| null)}
 */
export const getUser = async (userId) => {
    let data;

    try {

       /* if (isDev) {
            // JSON
            // data qui a la clé id = userId
            // et le metre dans :
            // data = .......

        } else {*/
            const result = await fetch(`${server}:${port}/user/${userId}`)
            data = await result.json()
        /*}*/
        return data.data

    } catch (error) {
        console.log(error);
    }

}


/**
 * @param {number} userId 
 * @returns {(Promise<ActivityTypes[]>| null)}
 */
export const getActivity = async (userId) => {
    try {
        const result = await fetch(`${server}:${port}/user/${userId}/activity/`)
        const data = await result.json()

        const resultActivity = data.data.sessions.map((activity) => {

            return new ActivityTypes({...activity})
        })
        return resultActivity

    } catch (error) {
        console.log(error);
    }
}


/**
 * @param {number} userId 
 * @returns {(Promise<SessionsTypes[]>| null)}
 */
export const getSessions = async (userId) => {
    try {
        const result = await fetch(`${server}:${port}/user/${userId}/average-sessions/`)
        const data = await result.json()

        const resultSessions = data.data.sessions.map((sessions) => {
            return new SessionsTypes({...sessions})
        })
        return resultSessions

    } catch (error) {
        console.log(error);
    }

}


/**
 * @param {number} userId 
 * @returns {(PerformanceTypes[]| null)}
 */
export const getPerformance = async (userId) => {
    try {
        const result = await fetch(`${server}:${port}/user/${userId}/performance/`)
        const data = await result.json()
        

        return data.data
    } catch (error) {
        console.log(error);
    }

}