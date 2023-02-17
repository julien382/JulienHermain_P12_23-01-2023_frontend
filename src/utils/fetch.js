import UserTypes from "../type/UserTypes.js"
import ActivityTypes from "../type/ActivityTypes.js"
import SessionsTypes from "../type/SessionsTypes.js"
import PerformanceTypes from "../type/PerformanceTypes.js"

import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA } from "../data/mocked.js"

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
/*
        if (isDev) {
            return USER_ACTIVITY.find(user => {
                if(user.userId == userId){
                    const resultActivity = user.sessions.map((activity) => {
                        return new ActivityTypes({...activity})
                    })
                    console.log(resultActivity);
                    return resultActivity
                }return null
            })          
            
        } else {
            const result = await fetch(`${server}:${port}/user/${userId}/activity/`)
            const data = await result.json()
    
            const resultActivity = data.data.sessions.map((activity) => {
                return new ActivityTypes({...activity})
            })
            return resultActivity
            
        }*/


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

        /*if (isDev) {
            return USER_AVERAGE_SESSIONS.find(user => {
                if(user.userId == userId){
                    const resultSessions = user.sessions.map((sessions) => {
                        return new SessionsTypes({...sessions})
                    })
                    console.log(resultSessions);
                    return resultSessions
                }return null
            })          
            
        } else {*/

            const result = await fetch(`${server}:${port}/user/${userId}/average-sessions/`)
            const data = await result.json()
            const resultSessions = data.data.sessions.map((sessions) => {
                return new SessionsTypes({...sessions})
            })
            return resultSessions
       /* }*/

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

       /* const resultPerformance = data.data.data.map((performance) => {
            return new PerformanceTypes({...performance})
            
        })
        console.log(resultPerformance);
        return resultPerformance*/
        return data.data

    } catch (error) {
        console.log(error);
    }
}