const User = {
  name: "Sena",
  email: "sena@.com",
  isActive: true
}

/*function createUser({ name: string, isPaid: boolean }) {}

let newUser = {
  name: "Sena",
  isPaid: false,
  email:"sena@.com"
}

createUser(newUser) //bu şekilde objeye email ekleyebiliyorum ama best practice değil.

createUser({
  name: "Sena",
  isPaid: false})

*/

function createCourse(): { name: string, price: number } {
  return {
    name: "React - The Complete Guide",
    price: 199
  }
}


/*type User = {
  name: string,
  email: string,
  isActive: boolean
}

type MyString = string //is also possible

function createUser(user: User): User{
  return {
    name: "Sena",
    email: "sena@.com",
    isActive: true
  }
} */

type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  credcardDetails?: number //make it optional with ?
}

type CardNumber = {
  cardNumber: string
}

type cardDate = {
  cardDate: string
}

type cardDetails = CardNumber & cardDate & {
  cvv: number
}

let myUser: User = {
  _id: "123",
  name: "Sena",
  email: "sena@.com",
  isActive: false
}

myUser.email = "sena@.com"
//myUser._id = "123"


export{}; 