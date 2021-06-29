import React from 'react'

const Card = props => {
    const {data,clickHandler} = props

    const btnStyle = {
        backgroundColor: data.color
    }
    
    return (
                <div className="card text-start p-2 col-md-5 col-sm-12 m-1 mb-5">
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.content}</p>
                        <a id={data.color} style = {btnStyle} href="#" className="btn btn-primary" onClick={clickHandler}>Click here</a>
                    </div>
                </div>
    )
}

export default Card