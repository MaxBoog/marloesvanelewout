class CustomNav extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
        
    <nav class="navbar container sticky-top navbar-expand-md navbar-light" id="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Marloes van Elewout</a>
        <button
          class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-evenly"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-inline-block btn btn-primary px-2" href="portfolio.html">Portfolio</a>
            </li>

            <li class="nav-item">
              <a class="nav-link d-inline-block" href="#"><i class="bi bi-instagram"></i></a>
            
              <a class="nav-link d-inline-block" href="#"><i class="bi bi-envelope"></i></a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
      
      `
  }
}

window.customElements.define("custom-nav", CustomNav)
