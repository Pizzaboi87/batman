import './errorMessage.css'

const ErrorMessage = ( { errorType }) => {
    if(errorType == 'inputError') {
        return (
            <h2 className='noMatch'>Only letters (capital or small)<br />numbers and hyphen are allowed.</h2>
        )
    } else {
        return (
            <h2 className='noMatch'>There's no match.<br />Try with other settings.</h2>
        )
    }
}

export default ErrorMessage;

