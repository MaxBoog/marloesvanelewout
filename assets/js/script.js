// expanding/shrinking the navbar

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  const navbar = document.getElementById("navbar")
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 80) {
    navbar.style.paddingTop = "1.5rem"
    navbar.style.paddingBottom = "1.5rem"
    navbar.style.backgroundColor = "white"
  } else {
    navbar.style.paddingTop = "2rem"
    navbar.style.paddingBottom = "2rem"
    navbar.style.backgroundColor = "transparent"
  }
}

// spinner

const spinner = document.querySelector(".spinner")

const fadeEffect = setInterval(() => {
  // if we don't set opacity 1 in CSS, then
  // it will be equaled to "" -- that's why
  // we check it, and if so, set opacity to 1
  if (!spinner.style.opacity) {
    spinner.style.opacity = 1
  }
  if (spinner.style.opacity > 0) {
    spinner.style.opacity -= 0.1
  } else {
    clearInterval(fadeEffect)
    spinner.style.display = "none"
  }
}, 100)

window.addEventListener("load", fadeEffect)