import React, { useContext } from 'react'
import Card from './Card/Card'
import UserContext from '../ContextApi/user-context'
import { toPng } from 'dom-to-image'
import '../App.css'
import { Link } from 'react-router-dom'
const ResultPage = () => {

    const usersInput = useContext(UserContext)

    const toDownload = () => {
        const downloadable = document.getElementById('downloadable-img')
        toPng(downloadable).then((data) => {
            const link = document.createElement("a");
            link.download = 'social-media-image-generator.png'
            link.href = data
            link.click()
        }
        )
    }

    return (
        <>
            <div id='downloadable-img'>
                <div className="userInputContainer" >
                    {usersInput.userInputs?.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <div>
                <button className='generate-submit-btn' onClick={toDownload}>Download</button>
                {/* <button className='generate-submit-btn'></button> */}
                <br/>
                <Link to='/'>
                    <button className='generate-submit-btn'>Back to Home</button>
                </Link>
            </div>
        </>
    )
}

export default ResultPage