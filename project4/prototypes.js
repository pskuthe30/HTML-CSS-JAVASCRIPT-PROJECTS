//Construtor
function Book() {
    console.log(`book initalized`)
}

// Whenever new Object is created the constructor is executed and so 
// it will display the book initialized
const book1 = new Book();

//Constructor
function Book(title,author,year){
    this.title=title,
    this.author=author,
   this.year=year
};
//getSummary as a prototype 
   Book.prototype.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
 
    }
// get Age
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

 // Revise / change the year

 Book.prototype.revise =function(newyear){
     this.year = newyear;
     this.revised=true;
     // adding property to it
 }
    const book2= new Book('Book one','John Green', '2020');
    console.log(book2);
    console.log(book2.getAge());

    book2.revise('2018');
    console.log(book2);
       


