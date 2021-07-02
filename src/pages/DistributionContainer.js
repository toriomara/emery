import React from 'react'
import Main from '../layouts/Main'
import {sendMessageCreator} from '../features/dialogs-reducers'
import {compose} from 'redux'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)
