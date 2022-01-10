class CustomFooter extends HTMLElement {
  constructor() {
    const datum = new Date().getFullYear().toString()
    super()
    this.innerHTML = `
    <footer class="container">
      <div className="row">
        <div className="col">
          <div class="d-flex justify-content-center align-items-center">
            <div class="px-1">
              <a href="#"><i class="bi bi-instagram"></i></a>
            </div>
            <div class="px-1">
              <a href="#"><i class="bi bi-envelope"></i></a>
            </div>
          </div>
          <p class="text-center pt-3">&copy; ${datum} - <a href="https://www.marloesvanelewout.nl">www.marloesvanelewout.nl</a></p>
        </div>
      </div>
    </footer>
      
      `
  }
}

window.customElements.define("custom-footer", CustomFooter)
