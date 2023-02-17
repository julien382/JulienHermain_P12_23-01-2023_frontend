import UserTypes from "../type/UserTypes.js"
import ActivityTypes from "../type/ActivityTypes.js"
import SessionsTypes from "../type/SessionsTypes.js"
import PerformanceTypes from "../type/PerformanceTypes.js"

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/mocked.js"

const server = "http://localhost"
const port = "3000"

const isDev = process.env.NODE_ENV === 'development'

/**
 * @param {number} userId 
 * @returns {(Promise<UserTypes[]>| null)}
 */
export const getUser = async (userId) => {
    try {

        if (isDev) {
            const data = USER_MAIN_DATA.find((user) => user.id.toString() === userId); 

            const userMain = new UserTypes(data);
            return userMain; 
            
        } else {
            const result = await fetch(`${server}:${port}/user/${userId}`)
            const data = await result.json()

            const userMain = new UserTypes(data.data);
            return userMain;

        }

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

        if (isDev) {
            const data = USER_ACTIVITY.find((user) => user.userId.toString() === userId); 

            const userActivity = new ActivityTypes(data);
            return userActivity; 
            
        } else {
            const result = await fetch(`${server}:${port}/user/${userId}/activity/`)
            const data = await result.json()

            const userActivity = new ActivityTypes(data.data);
            return userActivity;

        }

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

        if (isDev) {
            const data = USER_AVERAGE_SESSIONS.find((user) => user.userId.toString() === userId); 

            const userSessions = new SessionsTypes(data);
            return userSessions   

        } else {
            const result = await fetch(`${server}:${port}/user/${userId}/average-sessions/`)
            const data = await result.json()

            const userSessions = new SessionsTypes(data.data);
            return userSessions;

        }

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

        if (isDev) {
            const data = USER_PERFORMANCE.find((user) => user.userId.toString() === userId); 

            const userPerformance = new PerformanceTypes(data);
            return userPerformance  

        } else {
            const result = await fetch(`${server}:${port}/user/${userId}/performance/`)
            const data = await result.json()

            const userPerformance = new PerformanceTypes(data.data);
            return userPerformance;

        }

    } catch (error) {
        console.log(error);
    }
}