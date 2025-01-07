var score = 33;
score = "33";
score = 44;
var sena = {
    name: "Sena",
    id: 123,
    //username: "sena" /sena Nesnesi:  { name: "Sena", id: 123, username: "sena" } Hem name hem de username içeriyor, bu nedenle ne User ne de Admin türüne tam olarak uyuyor.TypeScript, birleşim türlerinde fazladan özelliklere izin vermez, bu nedenle hata alırsınız.
};
sena = {
    username: "sena",
    id: 234
}; //bu mümkün
/*
function getDbId(id: number | string) {
  //making some api calls
  console.log(`DB id is: ${id}`)
}
*/
function getDbId(id) {
    //id.toLowerCase() hata verir çünkü nuber ı da düşünüyor
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id.toFixed();
    }
}
getDbId(3);
getDbId("3");
//array
//const data: number[] | string [] = [1, 2, 3, "4"] Sadece number ya da sadece string arrayi olur bu şekilde, ikisini birlikte kullanmana izin vermez
var data = [1, 2, 3, "4"]; //ikisini birlikte kullanabiliriz bu şekilde
var pi = 3.14;
var seatAllotment;
seatAllotment = "aisle";
//seatAllotment = "crew" not allowed 
