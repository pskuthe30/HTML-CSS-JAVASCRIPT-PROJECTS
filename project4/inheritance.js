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

// Magazine constructor
    function Magazine(title,author,year,month){
    Book.call(this,title,author,year);

    this.month=month;
    }
//Inherit prototype
Magazine.prototype =Object.create(Book.prototype);
    //Instantiate Magzine Object
    const mag1 = new Magazine ('Mag One','John Green', '2018','May');

    // Use Magzine Constructor
    Magazine.prototype.constrctor=Magazine;
    console.log(mag1);
   
