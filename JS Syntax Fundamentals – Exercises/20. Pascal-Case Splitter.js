function pascalCaseSplitter(text){
    let characters = text.split('');
    let output = [];

    for (const element of characters) {
        
        let char = element.charCodeAt();

        if (char >= 65 && char <= 90) {
            
            if (!!output.length) {
                output += ', ';
            }
            output += element;
        }

        else {
            output += element;
        }
    }

    return output;
}