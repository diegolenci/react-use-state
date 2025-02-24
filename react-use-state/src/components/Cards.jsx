const Cards = ({title, description}) => {
    return ( 
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    {title}
                <p className="card-text">
                    {description}
                </p>
                </div>
            </div>
        </div>
    )
}

export default Cards