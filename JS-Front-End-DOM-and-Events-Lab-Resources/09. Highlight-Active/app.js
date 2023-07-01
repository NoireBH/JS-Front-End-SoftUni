function focused() {
    
    let inputFields = Array.from(document.querySelectorAll('input'));

    inputFields.forEach(field => field.addEventListener('focus',focusedField));
    inputFields.forEach(field => field.addEventListener('blur',focusLost));

    function focusedField(e){
        this.focus();
        let parent = e.target.parentNode;
        parent.classList.add("focused");
    }

    function focusLost(e) {
        let parent = e.target.parentNode;
       parent.classList.remove("focused");
    }
}