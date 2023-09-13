import { useState, useEffect } from "react"

const Sidebar = ({setPriceRange, setOrderAlphabetical, setOrderPrice}) => {

    const [currRange, setCurrRange] = useState({min: 0, max: 10000});
    const [currRate, setCurrRate] = useState(0);
    const [orderAZ, setOrderAZ] = useState(0);
    const [order19, setOrder19] = useState(0);

    useEffect(() => {
        if(orderAZ > 2) {
            setOrderAZ(0);
            setOrderAlphabetical(0);
        }
        if(order19 > 2) {
            setOrder19(0);
            setOrderPrice(0);
        }
    }, [orderAZ, order19])

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
        <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark text-start" styles="width: 280px;">
            <a href="" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
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
                    <button class="btn btn-outline-secondary dropdown-toggle d-inline-flex align-items-center rounded border-0 text-white" data-bs-toggle="collapse" data-bs-target="#order-collapse" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi pe-none bi-sort-down me-2" viewBox="0 0 16 16">
                            <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
                        </svg>
                        Order
                    </button>

                    <div class="collapse text-center" id="order-collapse" styles="" >
                        <div class="btn-group my-2" role="group" aria-label="Basic radio toggle button group" >
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked={orderAZ === 0} onClick={() => { setOrderAZ(orderAZ+1); setOrderAlphabetical(orderAZ+1)}}/>
                            <label class="btn btn-outline-secondary" htmlFor="btnradio1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"></path>
                                    <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path>
                                </svg>
                            </label>

                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autoComplete="off" checked={orderAZ === 1} onClick={() => { setOrderAZ(orderAZ+1); setOrderAlphabetical(orderAZ+1)}}/>
                            <label class="btn btn-outline-secondary" htmlFor="btnradio2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-sort-alpha-down-alt" viewBox="0 0 16 16">
                                    <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"/>
                                    <path fill-rule="evenodd" d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"/>
                                    <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
                                </svg>
                            </label>

                        </div>

                        <div class="btn-group ml-2" role="group" aria-label="Basic radio toggle button group" >
                            <input type="radio" class="btn-check" name="btnradio2" id="btnradio3" autoComplete="off" checked={order19 === 0} onClick={() => { setOrder19(order19+1); setOrderPrice(order19+1)}}/>
                            <label class="btn btn-outline-secondary" htmlFor="btnradio3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-sort-numeric-down" viewBox="0 0 16 16">
                                    <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/>
                                    <path fill-rule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
                                    <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
                                </svg>
                            </label>

                            <input type="radio" class="btn-check" name="btnradio2" id="btnradio4" autoComplete="off" checked={order19 === 1} onClick={() => { setOrder19(order19+1); setOrderPrice(order19+1)}}/>
                            <label class="btn btn-outline-secondary" htmlFor="btnradio4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-sort-numeric-down-alt" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
                                    <path d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
                                </svg>
                            </label>
                        </div>
                    </div>

                </li>
                <li>
                    <button className="btn btn-outline-secondary border-0 text-white">
                        
                            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
                            Products
                        
                    </button>
                </li>
                <li>
                    <button type="button" className="btn btn-outline-secondary border-0 text-white" data-bs-toggle="modal" data-bs-target="#informationSheet">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi pe-none bi-boxes me-2" viewBox="0 0 16 16">
                                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>
                            </svg>
                            Categories
                    </button>
                </li>
                <li >
                    <button class="btn btn-outline-secondary dropdown-toggle d-inline-flex align-items-center rounded border-0 text-white" data-bs-toggle="collapse" data-bs-target="#price-collapse" aria-expanded="false">
                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi pe-none bi-plus-slash-minus me-2" viewBox="0 0 16 16">
                                <path d="m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708ZM4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1Zm5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12Z"/>
                            </svg>
                            Price Range
                        
                    </button>
                    <div class="collapse" id="price-collapse" styles="">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <div>
                                Min: [ ${currRange.min} ]
                                <form class="multi-range-field my-2 pb-2">
                                    <input id="multi6" class="multi-range" min="0" max="10000" step="50" type="range" onChange={(p)=>minChange(p)}/>
                                </form>
                                Max: [ ${currRange.max} ]
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