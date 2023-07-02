function lockedProfile() {
    
    let buttons =Array.from(document.getElementsByTagName('button'))
    .forEach((button) => {
        button.addEventListener('click',toggleInfo)
    });

    function toggleInfo(e){
        let btn = e.currentTarget;
        let currentProfile = btn.parentElement;
        let children = currentProfile.children;
        let hiddenInfo = children[9];
        let unlockedRadioInput = children[4];

        if (unlockedRadioInput.checked) {
            
            if (btn.textContent === 'Show more') {
                btn.textContent = 'Hide it';
                hiddenInfo.style.display = 'block';
            }
    
            else {
                btn.textContent = 'Show more';
                hiddenInfo.style.display = 'none';
            }
        }

        
    }
}