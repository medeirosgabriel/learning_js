
var dict = {1:"January", 2:"February", 3:"March", 4:"April",
            5:"May", 6:"June", 7:"July", 8:"August",
            9:"Septmber", 10:"October", 11:"November", 12:"December"};

month = (dict, n) => (n in dict) ? dict[n] : "None"

for (let i = 0; i <= 12; i++) {
    console.log(month(dict, i));
}