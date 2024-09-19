// OBJECTS IN JS

/**
 * objects are simple and lightweight in JS
 * we're not working in an OOP context as you may be used to
 * objects are super-flexible and can be altered beyond what other languages allow
 * 
 * ultimately, they're sets of key-value pairs
 */

let album1 = {
    title: '5150',
    artist: 'Van Halen',
    releaseYear: 1985
}

console.log(album1);

// access properties via dot notation
console.log(album1.artist);

// change them in the same way
album1.artist = 'Van Hagar';

console.log(album1);
album1.artist = 'Van Halen';

// you can add properties as well!
album1.label = 'Warner Bros.';

console.log(album1);

// you can remove properties as well
delete album1.label;

console.log(album1);

// properties can be objects, arrays, etc.
album1.members = [ 'Sammy Hagar', 'Michael Anthony', 'Eddie Van Halen', 'Alex Van Halen' ];

console.log(album1);

console.log(album1.members[2]);

// properties can in fact be functions as well
album1.play = () => { console.log('Music, Lyrics & Drums!!!'); };

console.log(album1);
// run the function using dot notation as well
album1.play();

// some objects can get complicated...

let album2 = {
    title: 'Ten',
    artist: 'Pearl Jam',
    releaseYear: 1991,
    members: [
        {
            name: 'Eddie Vedder',
            instruments: [
                'Vocals',
                'Guitar',
                'Ukulele'
            ]
        },
        {
            name: 'Mike McCready',
            instruments: [
                'Electric Guitar',
                'Acoustic Guitar'
            ]
        }
    ]
}

// trying to get 'Ukulele'
console.log(album2.members[0].instruments[2]);

// printing all the instruments on individual lines
for (let member of album2.members) {
    for (let instrument of member.instruments) {
        console.log(instrument);
    }
}

console.log(album1.play);