"use strict";
const numberOfFilms = prompt("քանի ֆիլմ էք դիտել այսօր", "")

  if(numberOfFilms == null || numberOfFilms === 0 || numberOfFilms < 0 || numberOfFilms === ""    ){
console.log("գրել միայն թվեր")
  }

 const personalMovieDB ={
    count:numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: true,
    
 }
   function rememberMyFilms(){
    for (let i = 0; i < 1; i++){
    const a = prompt("որ ֆիլմ էք վերջերս դիտել","")
    const b = prompt("ինչքան կգնահատեիք այդ ֆիլմը ","")
    
    if(a != null && b != null && a != "" && b != "" && a.length < 30){
         
        
        personalMovieDB.movies[a] = b;
        console.log('done');
        
    }else{
        console.log('error')
        i--
    }
    
  }
 
}
 
rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 5){
        console.log("Բավականին քիչ ֆիլմեր էք դիտել")
    }else if(personalMovieDB.count > 5 && personalMovieDB.count < 15){
   console.log("Դուք բավականին շատ ֆիլմեր էք դիտել")
    }else if(personalMovieDB.count > 15){
    console.log("դուք կինոմեն եք")
    }else{
        console.log("տեղի է ունեցել սխալ")
    }
}
 
detectPersonalLevel();  

function writeYourGenres(){
    for(let i = 1; i <= 1; i++){
        const geners = prompt(`ձեր սիրած Ժանրը${i}`);
        personalMovieDB.geners[i - 1] = geners;
    
    }
    }

    writeYourGenres()

    function showMyDB (){
        if(personalMovieDB.privat === true){
            console.log(personalMovieDB); 
        }else{
            console.log("Մեր տվյալների բազան փակ է")
        }
    }
    showMyDB ()
    
  console.log(personalMovieDB )