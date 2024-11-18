document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Here you would typically send this data to a server for authentication
  // For this example, we'll just check if the fields are not empty
  if (username && password) {
    alert('Login successful!'); // Replace with actual authentication logic
    // Redirect or perform other actions upon successful login
  } else {
    document.getElementById('errorMessage').textContent = 'Please enter both username and password.';
  }
});
