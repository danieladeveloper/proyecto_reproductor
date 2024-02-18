const usuarios = {
    "users": [
        {
            "username": "admin",
            "password": "contrasena1"
        },
        {
            "username": "usuario1",
            "password": "contrasena2"
        }

    ]
}

const viewPassword = document.getElementById('view')

viewPassword.addEventListener('click', () => {
    const actualType = passwordInput.getAttribute('type')
    if (actualType == 'password') {
      passwordInput.setAttribute('type', 'text')
    } else {
      passwordInput.setAttribute('type', 'password')
    }
  })

const btnLogin = document.getElementById('btnLogin')
btnLogin.addEventListener('click', function () {
    event.preventDefault()

    const username = document.getElementById('usuarioInput').value;
    const password = document.getElementById('passwordInput').value;


    // Utilizamos el método find sobre el array de usuarios para buscar un usuario que coincida.
    // El método find itera sobre cada elemento del array y retorna el primero que cumpla la condición.
    const user = usuarios.users.find(u => u.username === username && u.password === password);

    // Comprobamos si la constante user tiene un valor (lo que significa que el usuario fue encontrado).
    if (user) {
        alert('Login successful')
        localStorage.setItem('isLogged', true)
        // Usuario encontrado y contraseña correcta
        window.location.href = "paginareproductor.html";   // Redirecciona a la paginareproductor.html
    } else {
        // Usuario no encontrado o contraseña incorrecta
        alert('Usuario o contraseña incorrecta.');
    }

})

if (localStorage.getItem('isLogged')) {
    const form = document.getElementById('contenedorlog')
    form.innerHTML = `<div class="Logoutclass">
    <div class="regresa">
    <a href="paginareproductor.html" id="back">
     Back
  </a>
  </div>
    <div class="Vuelve">
    <button id="logout">Log out</button>
    <h4 class="pronto">Vuelve pronto</h4>
    </div>
        </div>`

    const logoutBtn = document.getElementById('logout')
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isLogged')
        window.location.href = "login.html"
    })
}