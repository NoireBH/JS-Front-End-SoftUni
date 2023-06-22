function movieTask(input){

    let movies = [];

    for (const line of input) {
        
        let commandTokens = line.split(' ');

        if (line.includes('addMovie')) {

            let movieName = commandTokens.slice(1).join(' ');
            movies.push({name: movieName});           
        }

        else if(line.includes('directedBy')){

            let indexOfToken = commandTokens.indexOf('directedBy');
            let movieName = commandTokens.slice(0, indexOfToken).join(' ');
            let director = commandTokens.slice(indexOfToken + 1).join(' ');
            let movie = movies.find((m) => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        }

        else if(line.includes('onDate')) {
            let indexOfToken = commandTokens.indexOf('onDate');
            let movieName = commandTokens.slice(0, indexOfToken).join(' ');
            let date = commandTokens.slice(indexOfToken + 1).join(' ');
            let movie = movies.find((m) => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }    

    for (const movie of movies) {
        
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
            console.log(JSON.stringify(movie));
        }

    }

}

    movieTask([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );

    movieTask([
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
        ]
        );