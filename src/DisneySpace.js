import './DisneySpace.css'

function DisneySpace(props) {
    const { title, image, desc} = props
    return(
        <div className='DisneySpace'>
                <h1>{ title }</h1>
                    <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="N/A" />
                <p>{ desc }</p>
        </div>
    )
}

export default DisneySpace