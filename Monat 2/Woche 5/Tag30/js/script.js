"use strict";

let productName = /cupcake/g;
let productDescription = "Muffin chocolate cake chocolate bar I love chocolate toffee lemon drops carrot cake. Wafer wafer gummi bears powder sweet roll tart cheesecake. Lemon drops tart cupcake dessert. Pudding oat cake danish. Chupa chups bear claw cupcake sugar plum I love caramels muffin cake. Macaroon dragée candy chocolate bar. Jelly chocolate bar macaroon icing tootsie roll I love I love cookie cupcake. Donut apple pie cotton candy.";
let productNameNew = "TORTE";

document.write("Und hier der neue Text:" + productDescription.replace(productName, productNameNew));
