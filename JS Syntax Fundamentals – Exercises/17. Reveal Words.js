function revealWords(words, templates) {

    words = words.split(', ');
    arrayOfTemplates = templates.split(' ');

    for (let i = 0; i < words.length; i++) {

        for (let j = 0; j < arrayOfTemplates.length; j++) {

            if (arrayOfTemplates[j].startsWith('*')
                && arrayOfTemplates[j].length === words[i].length) {

                    arrayOfTemplates[j] = arrayOfTemplates[j].replace(arrayOfTemplates[j], words[i]);
            }
        }

    }

    console.log(arrayOfTemplates.join(' '));
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);