const notificationsReducer = (state = {} , action) => {
    switch(action.type) {
        case "SUCCESS_NOTIFICATION":
            return {...state, type: "success", message: action.payload.message, title: action.payload.title}
        case "ERROR_NOTIFICATION":
            return {...state, type: "error", message: action.payload.message, title: action.payload.title}
        default:
            return state
    }
}

export default notificationsReducer