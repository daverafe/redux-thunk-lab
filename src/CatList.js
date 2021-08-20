// write your CatList component here
import React from 'react' 

function CatList(props) {
    const cats = props.catPics.map(cat => {
        return <img key={cat.id} alt="cat" src={cat.url} />
    })
    return (
        <div>
            {cats}
        </div>
    )
}

export default CatList