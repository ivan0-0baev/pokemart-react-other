const Header = () => {

    return (
        <div className="container d-flex flex-wrap justify-content-center ">
            <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                <img id="headerImage" src="/images/svgPokeball.svg" width="32" height="32" fill="currentColor" className="bi bi-vinyl me-4"></img>
                <span className="fs-4">Lilicove Pokemart</span>
            </a>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-4 text-primary" role="search">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
            </form>
        </div>
    )

}

export default Header;