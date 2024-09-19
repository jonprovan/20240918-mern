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

// object equality in JS
// == and === won't work to determine if two objects are equal the way we might like

const obj1 = { name: 'Name' };
const obj2 = { name: 'Name' };

// both of these are false, because the objects ARE different instances in memory
console.log(obj1 == obj2);
console.log(obj1 === obj2);

console.log(Object.is(obj1, obj2));

// can write a function to determine equality?
function checkEquality(o1, o2) {
    return (o1.name === o2.name) ? true : false;
}

console.log(checkEquality(obj1, obj2));

// including the function as part of the object
// special note from Kevin -- CAN'T USE 'this' IN A LAMBDA!! (Thank you!)
const obj3 = {
    name: 'Name',
    equals: function (o) {
        if (this.name === o.name)
            return true;
        return false;
    }
};
const obj4 = { name: 'Name' };

console.log(obj3.equals(obj4));

// if I assign an object to a new variable, we actually end up pointing to the same object with both variables

let firstObject = { name: 'First' };
let secondObject = firstObject;

secondObject.name = 'Second';

console.log(firstObject.name);

// OBJECT DESTRUCTURING IN JS
// sometimes, we want to copy an object to a new instance and/or break it out into variables, rather than point to the same object

// using the spread operator ...

let originalObject = {
    id: 1,
    name: 'Coffee Cup',
    weight: 5.5
}

// doing this just points to the same object with the same problem
let newObject = originalObject;

// using spread...
// you can add properties around the spread-out ones, too!
newObject = { ...originalObject, newProperty: 99 };

console.log(originalObject);
console.log(newObject);

// now, changing one DOES NOT change the other
newObject.id = 2;
newObject.name = 'Tea Cup';
newObject.weight = 3;

console.log(originalObject);
console.log(newObject);

// you can break an object out into individual variables as well
let { id, name, weight } = newObject;

console.log(name);

name = 'Tea Kettle';

console.log(name);
console.log(newObject.name);

// you can limit the degree to which someone can see/modify your objects, even without TypeScript, etc.
const permaObject = { id: 5, name: 'Toaster' };
console.log(permaObject);

permaObject.id = 7;
console.log(permaObject);

// Object.freeze() disallows any changes to the object properties
// once you freeze, there's no way back!!
// if you require more granular/reversible control over object modifiability, you can use .defineProperties()
Object.freeze(permaObject);

permaObject.id = 9;
permaObject.name = 'Microwave';
console.log(permaObject);

// check if it's frozen
console.log(Object.isFrozen());

// DEFINING PROPERTIES more granularly
const defObject = { id: 11, name: 'Blender' };
console.log(defObject);

// changing the id property to not be writable
Object.defineProperty(defObject, 'id', {
    writable: false
});

defObject.id = 12;

console.log(defObject);

// we can change it back afterward
Object.defineProperty(defObject, 'id', {
    writable: true
});

defObject.id = 12;

console.log(defObject);

// this makes the id property not show up when we enumerate (i.e., get all the props of) our object
Object.defineProperty(defObject, 'id', {
    enumerable: false
})

console.log(defObject);

Object.defineProperty(defObject, 'id', {
    enumerable: true
})

console.log(defObject);

// this disallows changing other aspects of this property
Object.defineProperty(defObject, 'id', {
    configurable: false
})

// this throws an error, because the property is no longer configurable
// Object.defineProperty(defObject, 'id', {
//     enumerable: false
// })

