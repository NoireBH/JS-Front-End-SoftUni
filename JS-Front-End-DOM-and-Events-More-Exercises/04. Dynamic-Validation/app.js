function validate() {
    
    const regex = new RegExp(/^[a-z]+@[a-z]+\.[a-z]{2,}$/);
    const email = document.getElementById('email');

    email.addEventListener('change',checkIfEmailIsValid);

    function checkIfEmailIsValid(e){
        const email = document.getElementById('email');

        if (!email.value.match(regex)) {
            email.classList.add('error');
        }

        else {
            email.classList.remove('error');
        }
    }
}