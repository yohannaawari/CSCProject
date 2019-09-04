//var yness = {
    //name: "Yohanna Dauda",
   // age: 40,
   // department: "CSC class of 2020!",
   // level: 300,
  //  grade: [69, 72, 90, 98, 79, 86]
//};

//console.log(yness.grade[3]);

var staff = [
    {
        name: "Yohanna Dauda",
        age: 22,
        address: "Anguwan Rukuba",
        tribe: "Afizere",
        grade: [69, 72, 90, 98, 79, 86],
        gender: "male",
        height: 1.78,
        department: "CSC",
        level: 300,
          
    },

    {
        name: "Adams Mark Oche",
        age: 25,
        address: "Abbatoir",
        tribe: "Idoma",
        grade: [60, 72, 91, 80, 79, 96],
        gender: "male",
        height: 1.77,
        department: "CSC",
        level: 300,
          
    },

    {
        name: "Eleojo Gift Job ",
        age: 22,
        address: "Three container",
        tribe: "Igala",
        grade: [69, 70, 70, 93, 80, 73],
        gender: "female",
        height: 1.69,
        department: "CSC",
        level: 300,
          
    },
    {
        name: "Maryam Mabas ",
        age: 23,
        address: "Behind PTS",
        tribe: "Challa",
        grade: [90, 79, 77, 93, 85, 88],
        gender: "female",
        height: 1.68,
        department: "CSC",
        Level: 400,
   },
   {
    name: "Ibedu Ifeoma Franca",
    age: 22,
    address: "Anguwan Rukuba",
    tribe: "Igbo",
    grade: [92, 79, 78, 91, 82, 86],
    gender: "female",
    height: 1.72,
    department: "CSC",
    Level: 300,
    },
   {
    name: "Bamigboye Christiana ",
    age: 24,
    address: "Three container",
    tribe: "Yoruba",
    grade: [64, 79, 72, 92, 89, 80],
    gender: "female",
    height: 1.70,
    department: "CSC",
    Level: 300,
    },
    {
        name: "Bok Victoria ",
        age: 23,
        address: "Staff Quarters",
        tribe: "Berom",
        grade: [64, 79, 72, 92, 89, 80],
        gender: "female",
        height: 1.65,
        department: "CSC",
        Level: 300,
    },
    {
        name: "Stephen Narent F.",
        age: 23,
        address: "Maza",
        tribe: "Mwagavul",
        grade: [67, 79, 72, 90, 87, 80],
        gender: "female",
        height: 1.69,
        department: "CSC",
        Level: 300,
    }, 
    {
        name: "Emmanuel Elizabeth",
        age: 27,
        address: "Farin Gada",
        tribe: "Ibibio",
        grade: [87, 99, 97, 62, 70, 82],
        gender: "female",
        height: 1.72,
        department: "CSC",
        Level: 300,
    },
    {
        name: "Uzaifat ibrahim",
        age: 26,
        address: "Behind Central Mosque",
        tribe: "Mwagavul",
        grade: [80, 90, 90, 60, 73, 52],
        gender: "male",
        height: 1.73,
        department: "CSC",
        Level: 400,
    },
    {
        name: "Owoicho Susan",
        age: 25,
        address: "Farin Gada",
        tribe: "Idoma",
        grade: [86, 95, 75, 63, 72, 87],
        gender: "female",
        height: 1.70,
        department: "CSC",
        Level: 300,
    },
    {
        name: "Yada T. Martins",
        age: 24,
        address: "Odus",
        tribe: "Kagoro",
        grade: [87, 99, 97, 62, 70, 82],
        gender: "male",
        height: 1.76,
        department: "CSC",
        Level: 300,
    },
    {
        name: "Oyekale Alice OLuwatosin",
        age: 22,
        address: "Farin Gada",
        tribe: "Yoruba",
        grade: [88, 99, 77, 66, 70, 82],
        gender: "female",
        height: 1.70,
        department: "CSC",
        Level: 300,
    },
    {
        name: "Kundam Nanbal",
        age: 24,
        address: "Legislative Quarters",
        tribe: "Mupun",
        grade: [87, 99, 97, 62, 70, 82],
        gender: "male",
        height: 1.76,
        department: "CSC",
        Level: 300,
    },
    {
        name: "Deborah Musa Kibba",
        age: 23,
        address: "Odus",
        tribe: "chip",
        grade: [87, 59, 97, 60, 78, 76],
        gender: "female",
        height: 1.70,
        department: "CSC",
        Level: 300,
    },
    {
        name: "Ponfa Michael",
        age: 23,
        address: "Ring Road",
        tribe: "berom",
        grade: [87, 99, 92, 62, 70, 82],
        gender: "male",
        height: 1.75,
        department: "CSC",
        Level: 300,
    },
    {
        name: "Asalu Temitope Peter",
        age: 26,
        address: "Farin Gada",
        tribe: "Yagba",
        grade: [87, 99, 97, 67, 77, 87],
        gender: "male",
        height: 1.76,
        department: "CSC",
        Level: 300,
    },
    {
        name: "Sunday Josephine",
        age: 21,
        address: "Odus",
        tribe: "Eggon",
        grade: [87, 92, 92, 62, 70, 82],
        gender: "female",
        height: 1.68,
        department: "CSC",
        Level: 300,
    },
    {
        name: "Ohue Joy Osadebamen",
        age: 21,
        address: "Ring road",
        tribe: "Esan",
        grade: [83, 93, 93, 62, 73, 82],
        gender: "fmale",
        height: 1.73,
        department: "CSC",
        Level: 300,
    },
    
    
    

];
//var staffA= staff.filter((staff)=> staff.age < 23);
//var staffA= staff.filter((staff)=> staff.name.includes("Susan"));
//console.log(staffA);
function avg(arr){
    var num = 0;
    for(var index=0; index<arr.length; index++){
        num = num + arr[index];
    }
    return num/arr.length;
}
var b = 0;
var v;

students.forEach(function(item,index,data){
    if(b<avg(item.grade)){
        b = avg(item.grade);
        v = index;
    }
});
console.log(students[v]);