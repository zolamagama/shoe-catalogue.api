var brands = ['Adidas', 'Nike', 'Converse', 'Puma'];

var models = {

  'Adidas' : ['Superstar', 'Stan Smith', 'Yeezy Powerphase', 'Samba'],
  'Nike' : ['Air Force', 'Air Max', 'Air Jordan', 'Air Yeezy'],
  'Converse' : ['Allstar', 'Vintage Floral Chuck', 'Louie Lopez', 'Scooby-Doo Chuck 70'],
  'Puma' : ['Carson R', 'Tsugi Apex Solid', 'Ignite Flash Evoknit', 'Cell Surin 2 FM']

};

const colors = ['Black', 'Red', 'Orange', 'White', 'Grey'];


const sizes = ['3','4', '5', '6', '7', '8', '9']


function randomNumber(max){
  return Math.floor(Math.random() * max);
}

function randomNumberNotLessThan(lowest, range){
    return lowest + randomNumber(range);
}

var shoes = [];

function createshoe(){

    const brand = brands[randomNumber(4)];
    const model = models[brand][randomNumber(4)];
    const color = colors[randomNumber(4)];
    const size = sizes[randomNumber(4)];
    const price = randomNumberNotLessThan(500, 2000);


    return {
      brand,
      model,
      color,
      price,
      size
      
    };

}

const listOfshoes = function(){

    if (shoes.length === 0){
        for(var i=0;i<100;i++){
            shoes.push(createshoe())
        }
    }

    return shoes
}

module.exports = function(){

    const shoesOfColor = function(req, res, next){
        let color = req.params.color;
        let theshoes = listOfshoes();
        res.json(theshoes
                .filter((shoe) =>
                    shoe.color.toLowerCase() === color.toLowerCase() ));

    };

    const shoesOfbrand = function(req, res, next){
        let brand = req.params.brand;
        let theshoes = listOfshoes();

        res.json(theshoes
                .filter((shoe) =>
                    shoe.brand.toLocaleLowerCase() === brand.toLowerCase()
                ));
    };

    const sizeOfBrand = function(req, res, next){
      let size = req.params.size;
      let theshoes = listOfshoes();

      res.json(theshoes
              .filter((shoe) =>
                  shoe.size.toLocaleLowerCase() === size.toLowerCase()
              ));
  };
    const shoesOfColorAndbrand = function(req, res, next){
        let color = req.params.color;
        let brand = req.params.brand;
        let theshoes = listOfshoes();

        res.json(theshoes
                .filter((shoe) =>
                    shoe.color.toLowerCase() === color.toLowerCase()
                    && shoe.brand.toLocaleLowerCase() === brand.toLowerCase()
                ));

    };

    const shoesOfSizeAndBrand = function(req, res, next){
      let size = req.params.size;
      let brand = req.params.brand;
      let theshoes = listOfshoes();

      res.json(theshoes
              .filter((shoe) =>
                  shoe.size.toLowerCase() === size.toLowerCase()
                  && shoe.brand.toLocaleLowerCase() === brand.toLowerCase()
              ));

  };

    const showColors = function(req, res, next){
        res.json(colors);
    };

    const showSize = function (req, res, next) {
      res.json(sizes)
    }

    const showbrands = function(req, res, next){
        res.json(brands);
    };

    const createShoes = function(req, res, next){
        res.json(listOfshoes());
    }

    return {
        brands : showbrands,
        colors : showColors,
        sizes : showSize,
        shoesOfColor,
        shoesOfbrand,
        shoesOfColorAndbrand,
        shoesOfSizeAndBrand,
        createShoes,
        sizeOfBrand
    }

  }