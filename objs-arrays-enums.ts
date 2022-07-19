/*    name: string, // We also need to specify the type of the objects properties (ie: name)
      age: number
     {} tells typescript that its an object

*/

/* TUPLES
const person : {

    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];

} = {

    name: 'Joao',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
};

person.role.push('admin');
person.role[1] = 10;

*/

//const ADMIN = 0;
//const READ_ONLY = 1;
//const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR} ; // DEFAULT VALUES ARE 0,1,2

const person = {

    name: 'Joao',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// The best syntax is the one not commented out, where typescript infers the object type


let favoriteActivities: string[]; // String[] means its an array of strings, any[] is a mixed array
favoriteActivities = ['Sports']

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    //console.log(hobby.map());  WOULD  THROW ERROR SINCE MAP DOES NOT WORK ON STRINGS
}

if (person.role===Role.ADMIN){
    console.log('is author');
}