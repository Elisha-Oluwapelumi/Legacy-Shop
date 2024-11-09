let currentUser = localStorage.currentUser

let allUser  = JSON.parse(localStorage.userdetails)

welcome.innerText =  allUser[currentUser].firstname
fullname.innerText =  `${allUser[currentUser].firstname}    ${allUser[currentUser].lastname} `
email.innerText = allUser[currentUser].email

const Logout = () => {
    localStorage.removeItem('userloggedin');
    alert("You have been successfully logged out.");
    window.location.href = "login.html";
}