"use strict";
let numberOfFilms;

function start () {
	numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < -1) {
		numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	}
}
start ();


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
    
    if(!isNaN(b) && isNaN(a) && a.trim() != "" && b.trim() != "" && a != null && b != null && a != "" && b != "" && a.length < 30 && typeof(a) !=="number"){
     
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
    for(let i = 1; i <= 2; i++){
        const geners = prompt(`ձեր սիրած Ժանրը${i}`);
        if (geners != null && geners.trim() != "" && geners.length <= 20 && isNaN(geners)) {
			personalMovieDB.geners[i-1] = geners
		} else {
			i--;
		}
    }
};

writeYourGenres()

    function showMyDB (){
        if(personalMovieDB.privat === true){
            console.log(personalMovieDB); 
        }else{
            console.log("Մեր տվյալների բազան փակ է")
        }
        
    }
    showMyDB ()
    
  console.log(personalMovieDB.privat );
  