const form=document.getElementById('contactForm')
form.addEventListener('submit', function(event){
    event.preventDefault()
    const name =document.getElementById('name').value
    const lname =document.getElementById('lname').value
    const email = document.getElementById('email').value
        if (name==='' || lname==='' || email===''){
            alert('please enter all inputs')
            return
        } 
    alert('you are registered')
   form.reset()
})
