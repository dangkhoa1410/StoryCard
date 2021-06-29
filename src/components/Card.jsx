import React from 'react'

const Card = props => {
    const {data,clickHandler} = props

    const btnStyle = {
        backgroundColor: data.color
    }
    
    return (
        <div className="row mb-5">
            <div className="col">
                <div className="card text-start p-2">
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.content}</p>
                        <a id={data.color} style = {btnStyle} href="#" className="btn btn-primary" onClick={clickHandler}>Click here</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card