import React, { useEffect }  from "react";
import {NotificationContainer, NotificationManager} from "react-notifications";
import { connect } from "react-redux"
import "react-notifications/lib/notifications.css";

export const Notification = ({recipeNotification}) => {

    useEffect(() => {
        switch (recipeNotification.type) {
            case "success":
                NotificationManager.success(recipeNotification.message, recipeNotification.title, 5000);
                break
            case "error":
                NotificationManager.error(recipeNotification.message, recipeNotification.title, 5000);
                break
            default: 
                break
        }
    })

    return (
        <NotificationContainer/>
    )
}

const mapStateToProps = state => {
    return {
        recipeNotification: state.notifications
    }
}

export default connect(mapStateToProps)(Notification)