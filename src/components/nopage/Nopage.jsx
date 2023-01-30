import riddler from '../../assets/riddler.webp'
import NopageStyle from './NopageStyle'
import { useState } from 'react'
import './nopage.css'

const NoPage = ({ error }) => {

    const [buttonClickable, setButtonClickable] = useState(true)
    const [answer, setAnswer] = useState('Show Answer')

    const showAnswer = () => {
        setButtonClickable(false)
        setAnswer('What you find on this page:')
        setTimeout(() => {
            setAnswer('Nothing')
        }, 2000)
    }
    
    return (
        <>
            <NopageStyle />
            <h1 className='error--title'>Why it happens, have no clue?<br />It's an ERROR just for you.</h1>
            <div className='error'>
                <img src={riddler} alt='riddler' className='error--image' />
                <div className='error--riddle'>
                    <p className='error--text'>
                        What does man love more than life,<br />
                        Fear more than death or mortal strife.<br />
                        What the poor have, the rich require,<br />
                        and what contented men desire.<br />
                        What the miser spends<br />
                        and the spendthrift saves,<br />
                        And all men carry to their graves?
                    </p>
                    <button className='error--button' onClick={buttonClickable ? showAnswer : null}>{answer}</button>
                    <p className='error--text realError'>
                        Oh, and by the way the error is:<br />
                        {error ? `${error}` : 'Error 404 Page not exist'}
                    </p>
                </div>
            </div>
        </>
    )
}

export default NoPage;