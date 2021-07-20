//parent class
class Media {

    constructor(title) {
        this._title = title
        this._isCheckedOut = false
        this._ratings = []
    }

    //getter for properties
    get title() {
        return this._title
    }
    get isCheckedOut() {
        return this._isCheckedOut
    }
    get ratings() {
        return this._ratings
    }
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    //creating a method toggleCheckOutStatus that changes the valuse saved to the _isCheckedOut property
    toggleCheckOutStatus() {
            if (this.isCheckedOut === false) {
                return this.isCheckedOut = true;
            } else if (this.isCheckedOut === true) {
                return this.isCheckedOut = false;
            }
        }
        //creating a method getAverageRating that returns an average value of ratings array
    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0) / this._ratings.length;
        return ratingsSum;
    }

    //creating a method addRating 
    addRating(ratings) {
        this._ratings.push(ratings);
    }
}

//creating a Book class that extends Media/parent class
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    //creating a getters for author and pages
    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

//creating a Movie class that extends Media/parent class
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    //creating a getters for director and runTime
    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

//creating a Book instance with the following properties
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

//calling .toggleCheckOutStatus() on the historyOfEverything instance
historyOfEverything.toggleCheckOutStatus();

//log the value
console.log(historyOfEverything.isCheckedOut);

//call .addRating
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();

//log the result
console.log(historyOfEverything.getAverageRating());

//creating a Movie instance with the following properties
const speed = new Movie('Jan de Bont', 'Speed', 116);

//Call .toggleCheckOutStatus() on the speed instance.
speed.toggleCheckOutStatus();

//log the value
console.log(speed.isCheckedOut);

//call .addRating
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();

//log the result
console.log(speed.getAverageRating());

console.log(historyOfEverything);
console.log(speed);

class CD extends Media {
    constructor(title, artist, year, songs) {
        super(title);
        this._artist = artist;
        this._year = year;
        this._songs = [];
    }
    get artiste() {
        return this._artist;
    }
    get year() {
        return this._year;
    }
    get songs() {
            return this._songs;
        }
        //Fisher–Yates Shuffle
    shuffle(songs) {
        let randomSongs = songs;
        let i = this.randomSongs.length,
            t, j;
        while (--i > 0) {
            j = Math.floor(Math.random() * (i + 1));
            t = randomSongs[j];
            randomSongs[j] = randomSongs[i];
            randomSongs[i] = t
        }
        return randomSongs;
    }
};

const theBeatles = new CD('A Hard Day\'s Night', 'The Beatles', 1964, ['A Hard Day\'s Night', 'Tell Me Why', 'I\'ll Cry Instead', 'Can\'t Buy Me Love', 'And I Love Her', 'If I Fell', 'I Should Have Known Better'])

console.log(theBeatles)