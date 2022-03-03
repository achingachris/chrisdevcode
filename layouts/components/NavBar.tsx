const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Chris Achinga
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled' href='#'>
                Projects
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle disabled'
                id='navbarDropdown'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                More
              </a>
              <ul
                className='dropdown-menu dropdown-menu-end'
                aria-labelledby='navbarDropdown'
              >
                <li>
                  <a className='dropdown-item' href='#'>
                    Articles
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Cools
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
