import broken from '../../../../assets/broken.webp'
import { useRef } from 'react'
import '../issue/issue.css'

const IssueError = ({ error }) => {

    const front = useRef(null)
    const back = useRef(null)

    const turnIssue = () => {
        front.current.classList.toggle('frontTurn')
        back.current.classList.toggle('backTurn')
    }

    return (
        <div className='issue' onClick={turnIssue}>
            <div className='front' ref={front} style={{backgroundImage: `url(${broken})`}}></div>
	        <div className='back' ref={back}>
                <div className='issue--info'>
                    <h1>Error</h1>
                    <p>
                        The ComicVine API responded with an error,
                        this issue couldn't be loaded.
                    </p>
                    <br />
                    <p>{`${error}`}</p>
                </div>
            </div>
        </div>
    )
}

export default IssueError;