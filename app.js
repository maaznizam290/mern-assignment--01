let object = {
    suzuki:{
        mehran:{
            color:'red',
            price:1120,
            model:2008
        },
        swift:{
            color:'yellow',
            price:211020,
            model:2019
        },
        alto:{
            color:'black',
            price:211210,
            model:2006
        },
    },
    honda:{
        civic:{
            color:'gray',
            price:12472,
            model:2002
        },
        city:{
            color:'redwine',
            price:120000,
            model:2012
        },
        fit:{
            color:'darkgray',
            price:122211,
            model:2005
        },
    },
    toyota:{
        aqua:{
            color:'creamwhite',
            price:122339,
            model:2000
        },
        prius:{
            color:'gungray',
            price:32388,
            model:2001
        },
        corolla:{
            color:'white',
            price:323221,
            model:2020
        },
    },
    nissan:{
        safari:{
            color:'darkyellow',
            price:12200,
            model:2021
        },
        patrol:{
            color:'darkblack',
            price:47721,
            model:2022
        },
        dayz:{
            color:'gray',
            price:293939,
            model:2020
        },
    },
}
let key = Object.keys(object)
console.log(key)
for (var i = 0; i < key.length; i++) {
    document.getElementById("carName").innerHTML += `
    <option>${key[i]}</option>`
}
function myOption(value) {
    document.getElementById("modelName").innerHTML = " "
    let key = Object.keys(value)
    for (var i = 0; i < key.length; i++) {
        document.getElementById("modelName").innerHTML += `
    <option>${key[i]}</option>`

    }

}
function cars(){
    let car = document.getElementById("carName")
    // console.log(car.value)
    if(car.value=="suzuki"){
        myOption(object.suzuki)
    }else if (car.value=="toyota"){
        myOption(object.toyota)
    }else if (car.value=="honda"){
        myOption(object.honda)

    }else if(car.value=="nissan"){
        myOption(object.nissan)
    }


}
function carSearch(){
    let car = document.getElementById("carName")
    let model = document.getElementById("modelName")
    let a = car.value 
    let b = model.value
    console.log(object[a][b])
    var Json = JSON.stringify(object[a][b]);  
    document.getElementById("para").innerHTML = `<h3>${Json}</h3>`
}