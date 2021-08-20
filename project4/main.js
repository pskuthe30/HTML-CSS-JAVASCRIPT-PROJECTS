const companies=[
    {name:"company One",category:"Finance", start:1981,end:2003 },
    {name:"company Two",category:"Retail", start:1992,end:2008 },
    {name:"company Three",category:"Auto", start:1999,end:2007 },
    {name:"company FOur",category:"Retail", start:1989,end:2010 },
    {name:"company Five",category:"Technology", start:2009,end:2014 },
    {name:"company Six",category:"Finance", start:1987,end:2010 },
    {name:"company Seven",category:"Auto", start:1986,end:1996 },
    {name:"company Eight",category:"Technology", start:2011,end:2016 },
    {name:"company Nine",category:"Retail", start:1981,end:1989 }
];
const ages=[32,12,43,5,23,76,24,12,45,32,52,64,15,53,42,19,20,40];



// for (let i=0; i<companies.length; i++){
    // console.log(companies[i]);
// }

//forEach
// doesn't return anything.

companies.forEach(function(company){
    console.log([company.name]);
});
//filter

// let canVote =[];
// for( let i=0; i<=ages.length; i++){
    // if(ages[i]>=21){
        // canVote.push(ages[i])
        // 
    // }
// }
// console.log(canVote);
// 
const canDrink=ages.filter((age)=>{
    return age>=21;
})

console.log(canDrink);
// const canDrink=ages.filter(age =>age>=21);

//Filter reatil company

const retailOnly=companies.filter(company=>company.category=="Retail");
console.log(retailOnly);

//Get 80s comapnies
const oldCompanies=companies.filter(company=>(company.start >= 1980 && company.start<1990));
console.log(oldCompanies);
//Get companies lasted 10 years or more

const lastedTenYears=companies.filter(company=>(company.end - company.start)>=10);
console.log(lastedTenYears);

//Map
// create array of  company names 
const companyNames = companies.map(company =>company.name);
console.log(companyNames);
const testMap = companies.map(company =>
`${company.name} [${company.start} - ${company.end}]`
);
console.log(testMap);

//Get A square Root of ages.

// const agesSquare = ages.map(age =>Math.sqrt(age));
// console.log(agesSquare);
// 
// const ageTimesTwo=ages.map(age=>age * 2)
// console.log(ageTimesTwo);

const ageOnly=ages.map(age=>Math.sqrt(age)).map(age=>age * 2);
console.log(ageOnly);

//Sort

// const sortedCompanies = companies.sort((c1,c2)=>{
//    if( c1.start > c2.start){;

    //    return 1;;
    
//    }else{;

        //    return -1;;
        
    //    };
    
//    });;

//    console.log(sortedCompanies);;
//SOrted companies by start date
   const sorted = companies.sort((c1,c2)=>(c1.start > c2.start ? 1 : -1 ));
   console.log(sorted);
   
   //Sort ages from lowest to highest.

   const LowToHighAges=ages.sort((a, b)=>( a - b));
   console.log(LowToHighAges);
   const HighToLowAges=ages.sort((a, b)=>( b - a));
   console.log(HighToLowAges);
   
   //Reduce

   const addAges = ages.reduce((total , age )=> total + age ,0);

   console.log(addAges);
   //Get total years for all comapnies

   const totalYears = companies.reduce((total , company)=> total + (company.end - company.start),0)
   console.log(totalYears);


   // Combine methods

   const combined =ages
   .map(age=> age * 2)
   .filter((age)=>age>=40)
   .sort((a,b)=> a - b)
   .reduce((a, b)=>a + b, 0)

   console.log(combined);
