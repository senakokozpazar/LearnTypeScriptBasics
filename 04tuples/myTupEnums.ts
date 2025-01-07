//const user: (string | number)[] = [1, "Sena"] //belli bir sırada olmasını istiyorsan?
let user: [string, number, boolean]

//user = [true, 1223, "sena"] //sıralama önemli böyle hata verir
user = ["sena", 123, true]

let rgb: [number, number, number] = [255, 255, 255]

type User = [number, string] 

const newUser: User = [1, "Sena"]

newUser[1] = "SenaHatun" //override possible

//newUser.push(true)  gap in the code because tuples are basicly arrays with some restrictions

export {}

