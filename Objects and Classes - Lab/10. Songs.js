function songTask(array){

    class Song {
        constructor(typelist,name,time){
            this.typelist = typelist;
            this.name = name;
            this.time = time;
        }
       

    }

    let numberOfSongs = array[0];
    let typelist = array[array.length - 1];
    let songs = [];

    for (let index = 1; index <= numberOfSongs; index++) {
        
        let splitList = array[index].split('_');
        let type = splitList[0];
        let name = splitList[1];
        let time = splitList[2];

        songs.push(new Song(type,name,time));
        
    }

    if (typelist !== 'all') {
        for (const song of songs.filter(x => x.typelist == typelist)) {
        
            console.log(song.name);
        }
    }

    else{
        for (const song of songs) {
        
            console.log(song.name);
        }
    }
   
}

    songTask([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );

    songTask([4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater']
        );

    songTask([2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all']
        );