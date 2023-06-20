document.getElementById('submit').addEventListener('click',function(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (name === "" || !/^[a-zA-Z\s]+$/.test(name)) {
        return Swal.fire({icon: 'error',title: 'Oops...',text: 'Please enter a valid name (only letters allowed).',})
      }
    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
        return Swal.fire({icon: 'error',title: 'Oops...',text: 'Please enter a valid email address.',})
      }
    if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        return Swal.fire({icon: 'error',title: 'Oops...',text: 'Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.',})
      }
    if (confirmPassword !== password) {
        return Swal.fire({icon: 'error',title: 'Oops...',text: 'Confirm password should match the password field.',})
      }
      else{
        Swal.fire({
            icon: 'success',
            title: 'Form has been saved',
          })
      }
})

