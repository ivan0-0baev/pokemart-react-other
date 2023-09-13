const Categories = ({ categories, setCategories }) => {

    return (
        <div className="modal fade" id="informationSheet" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Categories</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-fill me-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
                    </svg>
                    Chosen Categories
                </p>
                {categories.map((item, index) => {
                    switch (item) {
                        case "All":
                            return (
                                <span class="badge rounded-pill bg-primary px-4 me-2" onClick={() => { setCategories(prevState => prevState.filter((item) => item !== "All") )}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill me-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                                    </svg>
                                    {item}
                                </span>
                            ) 
                        case "Pokeball":
                            return (
                                <span class="badge rounded-pill bg-danger px-4 me-2" onClick={() => { setCategories(prevState => prevState.filter((item) => item !== "Pokeball") )}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill me-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                                    </svg>
                                    {item}
                                </span>
                            ) 
                        case "Potion":
                            return (
                                <span class="badge rounded-pill bg-success px-4 me-2" onClick={() => { setCategories(prevState => prevState.filter((item) => item !== "Potion") )}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill me-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                                    </svg>
                                    {item}
                                </span>
                            )
                        case "Heal":
                            return (
                                <span class="badge rounded-pill bg-info px-4 me-2" onClick={() => { setCategories(prevState => prevState.filter((item) => item !== "Heal") )}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill me-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                                    </svg>
                                    {item}
                                </span>
                            )
                        case "TM":
                            return (
                                <span class="badge rounded-pill bg-warning px-4 me-2" onClick={() => { setCategories(prevState => prevState.filter((item) => item !== "TM") )}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill me-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                                    </svg>
                                    {item}
                                </span>
                            )
                        default:
                            return;
                    }
                })}
                <hr/>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box me-2" viewBox="0 0 16 16">
                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                    </svg>
                    List of Available Categories
                </p>
                <div className="container ">
                    <div className="row mb-3">
                        <div className="col">
                            <span class="badge rounded-pill bg-primary px-3" onClick={() => { setCategories(prevState => [...prevState, "All"]); setCategories(prevState => [...Array.from(new Set(prevState))]); }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-bookmark-fill me-2" viewBox="0 0 16 16">
                                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
                                </svg>
                                All
                            </span>
                        </div>
                        <div className="col">
                            <span class="badge rounded-pill bg-danger px-3" onClick={() => { setCategories(prevState => [...prevState, "Pokeball"]); setCategories(prevState => [...Array.from(new Set(prevState))]); }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-bookmark-fill me-2" viewBox="0 0 16 16">
                                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
                                </svg>
                                Pokeball
                            </span>
                        </div>
                        <div className="col">
                            <span class="badge rounded-pill bg-success px-3" onClick={() => { setCategories(prevState => [...prevState, "Potion"]); setCategories(prevState => [...Array.from(new Set(prevState))]); }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-bookmark-fill me-2" viewBox="0 0 16 16">
                                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
                                </svg>
                                Potion
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <span class="badge rounded-pill bg-info  px-3" onClick={() => { setCategories(prevState => [...prevState, "Heal"]); setCategories(prevState => [...Array.from(new Set(prevState))]); }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-bookmark-fill me-2" viewBox="0 0 16 16">
                                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
                                </svg>
                                Heal
                            </span>
                        </div>
                        <div className="col">
                            <span class="badge rounded-pill bg-warning  px-3" onClick={() => { setCategories(prevState => [...prevState, "TM"]); setCategories(prevState => [...Array.from(new Set(prevState))]); }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-bookmark-fill me-2" viewBox="0 0 16 16">
                                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
                                </svg>
                                TM
                            </span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Categories;