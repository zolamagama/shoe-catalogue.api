document.addEventListener('DOMContentLoaded', function(){

    var carsElem = document.querySelector('.brand');

    fetch("https://api-tutor.herokuapp.com/")
        .then(function(response){
            return response.json();
        })
        .then(function(carData){

            carData.forEach(function(car){
                var elem = document.createElement('div');
                elem.classList.add('car');
                elem.innerHTML = car.color + " " + car.make + " " + car.model;
                elem.style.backgroundColor = car.color;
                carsElem.appendChild(elem);
            });

        })
        .catch(function(err){
            //alert(err);
            carsElem.innerHTML = err;
            carsElem.style.backgroundColor = 'Crimson';
        });

});