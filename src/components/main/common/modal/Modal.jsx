import ReactDOM from 'react-dom'
import './modal.css'

const Modal = ({open, children}) => {

    if (!open) return null

    return ReactDOM.createPortal(
        <div className='overlay'>
            <div className='modal'>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal;