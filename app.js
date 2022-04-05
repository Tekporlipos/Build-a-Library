//here is the media class
class Media {
    constructor(name) {
        this._name =  name;
        this._ratings = [];
        this._isCheckedOut = false;
       
    }
    get name() {
        return this._name;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    toggleCheckOutStatus() {
       this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(inputValue) {
        if(inputValue <= 5) {
            this._ratings.push(inputValue);
        } else {
            console.log('Rating have to be under 5 but greater than 1');
        }
        
    }
    getAverageRating() {
        let sum = this._ratings.reduce((accumulator, rating) => accumulator + rating, 0);  
        return  Math.floor(sum / this._ratings.length);
    }
    set isCheckedOut(checkIn) {
        this._isCheckedOut = checkIn;
    }
     
}


// here is book class
class Book extends Media {
    constructor(author, name, pages, genre ) {
        super(name);
        this._author = author;
        this._pages = pages;
        this._genre = genre;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}
//here is movie class
class Movie extends Media {
    constructor(director, name, runTime, movieCast) {
        super(name);
        this._director = director;
        this._runTime = runTime;
        this._movieCast = movieCast;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._director;
    }
    get movieCast() {
        return this._movieCast;
    }
}
//here is cd class
class CD extends Media {
    constructor(artist, name, songs) {
        super(name);
        this._artist = artist;
        this._songs = songs;  
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
    // get the randomly sorted array of all the songs in the songs property
    shuffle() {
       return this._songs.sort(() => Math.random() - 0.5);
    }
}

// instanciating Book class
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);
// add values to ratings 
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());


//now the moving is playing
const speed = new Movie('Jan de Bont', 'Speed', 116, 'Chandler Bing');

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());


//the cd is running
const stateOfTrance = new CD('Bill Bryson', 'Jan de Bont', ['Weezer,Buddy Holly', 'The Rolling Stones, "Miss You"', 'MGMT, "Time to Pretend"', 'Smokey Robinson and the Miracles, "Shop Around"', 'Jackson Browne, "Running on Empty"']);

stateOfTrance.toggleCheckOutStatus();
console.log(stateOfTrance.isCheckedOut);

stateOfTrance.addRating(4);
stateOfTrance.addRating(5);
stateOfTrance.addRating(5);
console.log(stateOfTrance.shuffle());
