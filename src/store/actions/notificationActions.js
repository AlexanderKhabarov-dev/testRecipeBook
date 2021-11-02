export const successNotification = (title, message) => {
    return {
        type: "SUCCESS_NOTIFICATION",
        payload: {
            title,
            message,
        }
    }
}

export const errorNotification = (title, message) => {
    return {
        type: "ERROR_NOTIFICATION",
        payload: {
            title,
            message
        }
    }
}