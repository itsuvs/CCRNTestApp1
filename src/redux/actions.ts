export const ADD_LOCATION = (payload: object) => {
    return {
        type:"ADD_LOCATION",
        payload
    }
}

export const DELETE_LOCATION = (payload: number)=> {
    return {
        type: 'DELETE_LOCATION',
        payload
    }
}

export const CLEAR_ALL = () => {
    return {
        type: 'CLEAR_ALL'
    }
}

export const LOAD_LOCATION = () => {
    return {
        type: 'LOAD_LOCATION'
    }
}