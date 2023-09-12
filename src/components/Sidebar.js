import { useState } from "react"

const Sidebar = ({setPriceRange}) => {

    const [currRange, setCurrRange] = useState({min: 0, max: 10000})
    const [currRate, setCurrRate] = useState(0)


    const minChange = (p) => {
        
        if (isNaN(p.target.valueAsNumber)){
            setCurrRange({ min: 0, max: currRange.max })
        } else if (p.target.valueAsNumber > currRange.max){
            setCurrRange({ min: currRange.max, max: p.target.valueAsNumber })
        } else {
            setCurrRange({ min: p.target.valueAsNumber, max: currRange.max })
        }
        setPriceRange({ min: currRange.min, max: currRange.max })
    }
    const maxChange = (p) => {
        
        if (isNaN(p.target.valueAsNumber)){
            setCurrRange({ min: currRange.min, max: 10000 })
        } else if (p.target.valueAsNumber < currRange.min){
            setCurrRange({ min: p.target.valueAsNumber, max: currRange.min })
        } else {
            setCurrRange({ min: currRange.min, max: p.target.valueAsNumber })
        }
        console.log(currRange);
        setPriceRange({ min: currRange.min, max: currRange.max })
    }
    
    return (
        <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark" styles="width: 280px;">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                    </svg>
                </svg>
                <span className="fs-4">Filter</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi pe-none me-2" viewBox="0 0 16 16">
                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
                    </svg>
                    Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link  text-white">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                    Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link  text-white">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
                    Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link  text-white">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
                    Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link  text-white">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
                    Customers
                    </a>
                </li>
                <li class="mb-1">
                    <button class="btn dropdown-toggle d-inline-flex align-items-center rounded border-0 text-white" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-slash-minus me-2" viewBox="0 0 16 16">
                            <path d="m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708ZM4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1Zm5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12Z"/>
                        </svg>
                        Price Range
                    </button>
                    <div class="collapse" id="home-collapse" styles="">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <div>
                                Min: [ {currRange.min} ]
                                <form class="multi-range-field my-2 pb-2">
                                    <input id="multi6" class="multi-range" min="0" max="10000" step="50" type="range" onChange={(p)=>minChange(p)}/>
                                </form>
                                Max: [ {currRange.max} ]
                                <form class="multi-range-field my-2 pb-2">
                                    <input id="multi6" class="multi-range" min="0" max="10000" step="50" type="range"onChange={(p)=>maxChange(p)} />
                                </form> 
                            </div>
                            
                        </ul>
                    </div>
                </li>
            </ul>
            <hr/>
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    )

}

export default Sidebar;