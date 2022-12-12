// Functia 1 cu for each

const arrayForEach = ["randomDrinks", "randomBooks", "randomSongs", "randomGames", "randomFood"];

arrayForEach.forEach(list);

function list(item, index, arr) {
    console.log ("Functia 1",'Weird people love ' + item +'');
};

// Functia 2 cu map

const arrayForMap = ["randomDrinks", "randomBooks", "randomSongs", "randomGames", "randomFood"];

const map = arrayForMap.map((element) => element + " might be a good idea");

console.log("Functia 2",map);

// Functia 3 cu slice

const arrayForSlice = ["randomDrinks", "randomBooks", "randomSongs", "randomGames", "randomFood"];

const newSliced = arrayForSlice.slice(0, 1);

console.log("Functia 3",newSliced);

// Functia 4 cu splice

const arrayForSplice = ["randomDrinks", "randomBooks", "randomSongs", "randomGames", "randomFood"];

const newSplice = arrayForSplice.splice(0, 1, "randomThoughts");

console.log("Functia 4",newSplice, arrayForSplice);

// Functia 5 cu find

const arrayForFind = ["randomDrinks", "randomBooks", "randomSongs", "randomGames", "randomFood"];

const newFind = arrayForFind.find(findGames);

function findGames(item) {
    return item === 'randomGames';
};

console.log("Functia 5", newFind);

