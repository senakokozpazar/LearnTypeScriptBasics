let greetings: string = "Hello Sena";

let mynum = 6



console.log(greetings);

let userId = 334455.2 //Typescript can understand it is number you dont need :number if you dont need more strict type safety
userId.toFixed();

//boolean

let isLoggedIn: boolean = true

//Any keyword is not a type checked. you usually want to avoid this.

let hero: string;

function getHero() {
  return "thor";
}

hero = getHero();

export {};
