"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const user: (string | number)[] = [1, "Sena"] //belli bir sırada olmasını istiyorsan?
var user;
//user = [true, 1223, "sena"] //sıralama önemli böyle hata verir
user = ["sena", 123, true];
var rgb = [255, 255, 255];
var newUser = [1, "Sena"];
newUser[1] = "SenaHatun"; //override possible
