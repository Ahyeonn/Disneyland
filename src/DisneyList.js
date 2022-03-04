import DisneySpace from "./DisneySpace"
import './DisneyList.css'
import data from './disneyland-data.json'
import Title from './Title';

function DisneyList() {
    const spaces = data.map(( { title, images, desc }, i ) => {
    return(
        <DisneySpace
            id={i}
            key={title}
            title={title}
            desc={desc}
            image={images[0]} />
    )
  })

  return (
    <div>
        < Title />
        <div className="DisneyList">
            { spaces }
        </div>
    </div>
  )
}


export default DisneyList