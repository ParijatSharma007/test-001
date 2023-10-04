import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
import { Fragment } from 'react'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.OnClick}></div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const protalElement = document.getElementById('overlays')
export default function Modal(props) {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop OnClick={props.OnClick}/>, protalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, protalElement)}
    </Fragment>
}