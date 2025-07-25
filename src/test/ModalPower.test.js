import { describe, it, expect, beforeEach } from 'vitest'

const html = `
  <form id="waitlist-form">
    <input type="text" id="name" name="name" />
    <p id="name-error" class="hidden">No se pueden enviar campos vacíos.</p>

    <input type="email" id="email" name="email" />
    <p id="email-error" class="hidden">No se pueden enviar campos vacíos.</p>

    <button type="submit">¡Unirme a la Lista!</button>
  </form>
`

describe('ModalWaitlist (HTML validation only)', () => {
  beforeEach(() => {
    document.body.innerHTML = html

    // Simulamos el script inline del modal
    const form = document.getElementById('waitlist-form')
    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')
    const nameError = document.getElementById('name-error')
    const emailError = document.getElementById('email-error')

    form.addEventListener('submit', (e) => {
      let valid = true

      if (!nameInput.value.trim()) {
        nameError.classList.remove('hidden')
        valid = false
      } else {
        nameError.classList.add('hidden')
      }

      if (!emailInput.value.trim()) {
        emailError.classList.remove('hidden')
        valid = false
      } else {
        emailError.classList.add('hidden')
      }

      if (!valid) {
        e.preventDefault()
      }
    })
  })

  it('debe mostrar errores si se envía vacío', () => {
    const form = document.getElementById('waitlist-form')
    const nameError = document.getElementById('name-error')
    const emailError = document.getElementById('email-error')

    const event = new Event('submit', { bubbles: true, cancelable: true })
    const prevented = !form.dispatchEvent(event)

    expect(nameError.classList.contains('hidden')).toBe(false)
    expect(emailError.classList.contains('hidden')).toBe(false)
    expect(prevented).toBe(true)
  })

  it('no debe mostrar errores si se completa correctamente', () => {
    document.getElementById('name').value = 'Sebas'
    document.getElementById('email').value = 'test@correo.com'

    const form = document.getElementById('waitlist-form')
    const nameError = document.getElementById('name-error')
    const emailError = document.getElementById('email-error')

    const event = new Event('submit', { bubbles: true, cancelable: true })
    const prevented = !form.dispatchEvent(event)

    expect(nameError.classList.contains('hidden')).toBe(true)
    expect(emailError.classList.contains('hidden')).toBe(true)
    expect(prevented).toBe(false)
  })
})
