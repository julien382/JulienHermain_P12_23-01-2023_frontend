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

export const getActivity = async (userId) => {
    try {
        const result = await fetch(`${server}:${port}/user/${userId}/activity/`)
        const data = await result.json()

        return data.data
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

export const getPerformance = async (userId) => {
    try {
        const result = await fetch(`${server}:${port}/user/${userId}/performance/`)
        const data = await result.json()

        return data.data
    } catch (error) {
        console.log(error);
    }

}