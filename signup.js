let usersignupDetails = []
if(localStorage.userdetails){
    let getback = JSON.parse(localStorage.userdetails)
    usersignupDetails=getback
}
function create() {
    let inputone = document.getElementById('inputone')
    let inputtwo = document.getElementById('inputtwo')
    let inputthree = document.getElementById('inputthree')
    let inputfour = document.getElementById('inputfour')
    let inputfive = document.getElementById('inputfive')

    if (inputone.value == '' || inputtwo.value == '' || inputthree.value == '') {
        alert('Spaces Cannot be Empty')
    } else if (inputfour.value !== inputfive.value) {
        alert('Password Mismatch')
    }
    else {
        let obj = {
            firstname:inputone.value,
            lastname:inputtwo.value,
            phone:inputthree.value,
            password:inputfour.value,
        }
        usersignupDetails.push(obj)
        console.table(usersignupDetails)
        localStorage.setItem('userdetails', JSON.stringify(usersignupDetails))
        window.location.href = "login.html"
    }


    inputone = document.getElementById('inputone').value= ''
    inputtwo = document.getElementById('inputtwo').value= ''
    inputthree = document.getElementById('inputthree').value= ''
    inputfour = document.getElementById('inputfour').value= ''
    inputfive = document.getElementById('inputfive').value= ''

}