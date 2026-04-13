// OPV Drywall - Entry point
import '../styles/main.less'

// ---- Validación del formulario de registro ----
const form = document.getElementById('commentForm')
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let valid = true

    const name     = document.getElementById('name')
    const email    = document.getElementById('email')
    const phone    = document.getElementById('phone')
    const nameErr  = document.getElementById('nameError')
    const emailErr = document.getElementById('emailError')
    const phoneErr = document.getElementById('phoneError')

    // Nombre
    if (!name.value.trim()) {
      nameErr.style.display = 'block'
      valid = false
    } else {
      nameErr.style.display = 'none'
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.value.trim() || !emailRegex.test(email.value)) {
      emailErr.style.display = 'block'
      valid = false
    } else {
      emailErr.style.display = 'none'
    }

    // Teléfono
    if (!phone.value.trim()) {
      phoneErr.style.display = 'block'
      valid = false
    } else {
      phoneErr.style.display = 'none'
    }

    if (valid) {
      alert('¡Registro enviado exitosamente!')
      form.reset()
    }
  })
}
