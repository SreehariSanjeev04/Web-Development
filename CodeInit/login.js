document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const error = document.getElementById('error');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'admin@alumni.com' && password === 'password') {
            window.location.href = 'addyearbook.html';
        }
        else if(username==='' || password===''){
            alert('Username/Password is empty');
        }
        else {
            alert('Invalid email or password. Please try again.');
        }
    });
});
