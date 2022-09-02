let car = {
    suzuki:{
        mehran:{
            color:'red',
            price:122,
            model:2008
        },
        swift:{
            color:'red',
            price:122,
            model:2008
        },
        alto:{
            color:'red',
            price:122,
            model:2008
        },
    },
    honda:{
        civic:{
            color:'red',
            price:122,
            model:2008
        },
        city:{
            color:'red',
            price:122,
            model:2008
        },
        fit:{
            color:'red',
            price:122,
            model:2008
        },
    },
    toyota:{
        aqua:{
            color:'red',
            price:122,
            model:2008
        },
        prius:{
            color:'red',
            price:122,
            model:2008
        },
        corolla:{
            color:'red',
            price:122,
            model:2008
        },
    },
    nissan:{
        safari:{
            color:'red',
            price:122,
            model:2008
        },
        patrol:{
            color:'red',
            price:122,
            model:2008
        },
        dayz:{
            color:'red',
            price:122,
            model:2008
        },
    },
}


let carModel = document.getElementById('model');
function allCars(){
    let carName = document.getElementById('carName')
    let newCar = Object.keys(car);
    car.innerHTML = "";
    for (let i=0;i<newCar.length;i++){
        carName.innerHTML+=`<option value="carName"${newCar[i]}>${newCar[i]}</option>`
    }
}
allCars();
function allModels(){
    model.disabled = false;
    let carModel = Object.keys(car[carName.value]);
    console.log(carModel);
    model.innerHTML="";
}
allModels()
for (let i =0;i<carModel.length;i++){
    model.innerHTML+=`<option value=carModel ${carModel[i]}>${carModel[i]}</option>`
}

function carSearch(){
    let carFeatures = document.getElementById('carFeatures');
    let features = car[carName.value][carModel.value];
    let carValue = Object.keys(features);
    console.log(features);
    console.log(carValue);
    carFeatures.innerHTML=""
    for (let i =0;i<headings.length;i++){
        carFeatures.innerHTML += `<option${features}>${carValue}</option>`
        console.log(color);
    }
}