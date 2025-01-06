function addTwo(num: number): number{
  return num + 2
 //return "hello"
}

function getUpper(val: string){
  return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){
  //do stuff
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => { //Default value
  //do stuff
}

let myValue = addTwo(5);

getUpper("hello");

//signUpUser(1, 2, true); //hepsinde hata olsa da sırayla gösteriyor. Bir hatayı çözünce diğerini görüyorsun.
signUpUser("Sena", "sena@.com", true);

loginUser("Sena", "sena@.com"); //function'a default value verdiğim için burada sorun çıkmıyor.

/*function getValue(myVal: number): {
  if(myVal > 5){
    return true
  }
  return "200 OK"
} */ //Birden fazla tip dönebilir o zaman ne yapacağız?

const getHello = (s: string): string => {
  return ""
}

const heros = ["thor", "spiderman", "ironman"]
//const heros = [1, "thor", true]

heros.map((hero):string => {   //parametre tipini typescript kendi algılıyor, belirtmeme gerek yok ama dönüş tipini belirtmeliyim.
  return `hero is ${hero}`
})


function consoleError(errmsg: string): void {
  console.log(errmsg)
}

function handleError(errmsg: string): never { //something that will never return a value / Bir hata olduğu için hiçbir zaman dönüş değeri de olmayacak, sadece hata fırlatacak
  throw new Error(errmsg)
}

export {};