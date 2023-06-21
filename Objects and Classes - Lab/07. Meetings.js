function getMeetings(dayAndPerson){

    let meeting = {};

    for (const key of dayAndPerson) {
        
        let tuples = key.split(' ');
        let day = tuples[0];
        let person = tuples[1];

        if(meeting.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }

        else {
            meeting[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const key in meeting) {
        
        console.log(`${key} -> ${meeting[key]}`);
    }
}

getMeetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);
getMeetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);