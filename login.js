var retrievedObj = JSON.parse(localStorage.getItem('userdetails'));
console.log(retrievedObj); 


function login() {
    let inputone = document.getElementById('inputone').value;
    let inputtwo = document.getElementById('inputtwo').value;
    let inputthree = document.getElementById('inputthree').value;

    let userFound = false; 

    for (let index = 0; index < retrievedObj.length; index++) {
        if (retrievedObj[index].firstname === inputone && retrievedObj[index].phone === inputtwo && retrievedObj[index].password === inputthree) {
            userFound = true;
            localStorage.setItem('currentUser', index)
            break; 
        }   
    }
    
    if (userFound) {
        alert('User Found');
        window.location.href = "main.html";
    } else {
        alert('User Not Found Or Account Has Not Been Registered');
    }

   
    document.getElementById('inputone').value = '';
    document.getElementById('inputtwo').value = '';
    document.getElementById('inputthree').value = '';
}


