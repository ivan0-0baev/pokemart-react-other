import { useState } from "react"
import data from "../data.json"

const Body = ({ priceRange }) => {

    const [numElements, setNumElements] = useState(3)

    const pokeballs = data.products[0].pokeballs
    const potions = data.products[1].potions
    const heals = data.products[2].heals
    const tms = data.products[3].TMs

    const all = [].concat(pokeballs, potions, heals, tms)
    var item = []

    item = all;

    const slice = item.slice(0, numElements)
                    .filter(obj => obj.cost >= priceRange.min)
                    .filter(obj => obj.cost <= priceRange.max);

    const updateView = () => {
        setNumElements(numElements + 3);
        if(numElements + 3 >= all.length){
            document.getElementById("loadMore").style.visibility = "hidden";
        } 
    }

    return (
        
        <div className="album py-5 ">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    
                    {slice.map((item, index) => {
                        return(
                            <div key={index} className="col">
                                <div className="product card shadow-sm">
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#007bff"></rect>
                                        <text x="20%" y="50%" fill="#eceeef" dy=".3em">{item.name}</text>
                                    </svg>
                                    <div className="card-body bg-body-tertiary">
                                        <div className="card-text collapse" id={index}>
                                            <p>{item.description}</p>
                                            <p>${item.cost}</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button className="btn btn-sm btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target={"#" + index} aria-expanded="false" aria-controls="example">
                                                    View
                                                </button>
                                            </div>
                                            <small className="text-body-secondary"><img className="cardImage" src={item.img} width="100%" height="50"/></small>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        )
                    })}
                    
                </div>
            </div>
            <div className="col-lg-3 col-xxl-2 my-5 mx-auto">
                <div className="d-grid btn-group mt-3 mb-3">
                    <button id="loadMore" className="btn btn-sm btn-outline-primary" type="button" onClick={updateView}>
                    <svg id="loadMoreImage" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-counterclockwise me-3" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                    </svg>
                        Load More
                    </button>
                </div>
            </div>
        </div>
        
    )

}

export default Body;