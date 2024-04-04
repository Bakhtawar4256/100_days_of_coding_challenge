// Question 40: Album: Create objects for music albums.
function makeAlbum (artist:string, title:string, tracks?:number ):object{
    return {
        artist,
        title,
        tracks,
    };
}
    const album1 = makeAlbum("Doja Cat","Scarlet");
    const album2 = makeAlbum("Selena Gomez","Rare");
    const album3 = makeAlbum("Billie Eilish","Happier Than Ever",16);

    console.log(album1);
    console.log(album2);
    console.log(album3);

    
// Q:41
// Magicians: Display magician names from an array.

let magiciansName: string[] = ["ali", "sara", "maryam"];

function showMagician(magician: string[]){
    magician.forEach(name => {
        console.log(name);
    });
}
showMagician(magiciansName);



// Q:42
// Great Magicians: Add "the Great" to magician names.

function greatMagician(magicians: string[]){
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
        // console.log(magicians[i]);
    }
}
showMagician(magiciansName);
greatMagician(magiciansName)