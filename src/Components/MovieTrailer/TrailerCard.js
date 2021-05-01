import React from 'react'
import './TrailerCard.css'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function TrailerCard({el}) {
    return (
        <div className='App'>   
                <div className="cellphone-container1">  
                <iframe src={el.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div>
                <div className="mr-grid1 summary-row1">
                    <div className="col2">
                    <h3>SUMMARY</h3>
                    </div>
                </div>
                <div className="mr-grid1">
                    <div className="col1">
                    <h4 className="movie-description">{el.description}</h4>
                    </div>
                </div>
                </div>
                <Link to='/'>
                <Button>Back Home</Button>
                </Link>
                </div>
        </div>
    )
}
