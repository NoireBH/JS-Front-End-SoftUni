function deleteByEmail() {
    
    let emailToDelete = document.getElementsByName('email')[0].value;

    let emails = document.querySelectorAll('tr td:nth-child(2)');

    let found = false;

    for (const email of emails) {
        
        if (email.textContent === emailToDelete) {
            
            found = true;
            let emailParent = email.parentNode;
            emailParent.parentNode.removeChild(emailParent);
            document.getElementById('result').textContent = 'Deleted';
        }
        
    }

    if (!found) {
        
        document.getElementById('result').textContent = 'Not found.';
    }

    else {
        found = false;
    }
}
