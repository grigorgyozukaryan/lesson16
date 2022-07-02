const destructuring = {
    userName: "Mike",
    lastName: "Tyson",
    weight: "100kg",
    friends:[
        "2pac","Evander Holyfield"
    ]
}

const {userName,lastName, age=56,weight:y} = destructuring
console.log(userName,lastName,age,y)
const[friend1,friend2]=destructuring.friends
console.log( `${friend1} and ${friend2}`)


const destructuring2 ={
    counterStrike:"1.6",
    cs:"source"
}

const {counterStrike:x,version: i = 1.8, cs:z,  } = destructuring2
console.log( x, z,i)

const destructuring3 ={
guns:"glock.18",
guns1:"tt",
gins2:" baretta",
arsenalGuns:["ak74", "m16", "makarov","walther"]

}
const {guns} = destructuring3
const [,,,w] = destructuring3.arsenalGuns
console.log(`${guns} vs ${w}`)

const destructuring4 ={
    game:"cs1.6",
    game1:"left 4 dead ",
    game2:"forza horizon",
    game3:"tekken"
}
const {game:v, game1:l,game2:h, game3:t} = destructuring4
console.log(v,l,h,t)


const destructuring6 ={
 car:"mercedes",
 car1:"bmw",
 car2:"toyota",
 car3:"lincoln",
 car4: "cadilac",  
carMod:[ "amg63", "e60", "tundra","navigator","escalade"]


}
const {car,car1, car2, car3, car4,car5: m ="maybach", car6:o = "opel"} = destructuring6 
 const [mm,bb,tt,ll,cc] = destructuring6.carMod
  
console.log(car,car1, car2, car3, car4,m,o, mm,bb,tt,ll,cc)
 



const destructuring1 = [1,64,31,{username:"Lenox",lastname:"Lewis"},65,32,20,27]

const {username,lastname} = destructuring1[3]
console.log(username,lastname)
const [a,b,c,,d,e,f,j] = destructuring1
console.log( a,b,c,d,e,f,j)


const destructuring7 = [1,2,3,4,5,6,7,8,9,{carName:"hyundai"},9,8,7,6,5,4,3,2,1]
const {carName} =destructuring7[9]
console.log(carName,)

const destructuring8 = [] 
const [aa=564,xx=245644,yy=456,ss=54] = destructuring8
console.log( aa,xx,yy,ss)

const destructuring9 = [21,454, 5656,23,15,{heroesName:"Vardan", heroesLastName:"Mamikonyan" }]
const{heroesName, heroesLastName }= destructuring9[5]
console.log(heroesName, heroesLastName)


const destructuring10 = [,45,25,36,14,74,85,96,32,65,92,73,]
const [jj=1, rr, yyy, ] = destructuring10
console.log(jj , rr, yyy,)
