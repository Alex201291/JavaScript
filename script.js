/* Задание номер 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100. */

var x = 2;

function prime(num){
    var i = 2;
    while(i < num / 2){
        if(num % i == 0){
            return false;
        }
        i++;
    }
    return true;
}

while(x <= 100){
    if(prime(x) == true){
        conslole.log(x)
    }
    x++;
}

/*Задание номер 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.*/


var basket = [
    {
        name: "air 91",
        company: "nike",
        price: "1000",
        count: "3"
    },
    {
        name: "for run 2000",
        company: "reebok",
        price: "2000",
        count: "4"
    },
    {
        name: "space x",
        company: "adidas",
        price: "5000",
        count: "2"
    },
      
]

function countBAsketPrice(mas){
    var sumBasket = 0;
    for(var item of mas){
        sumBasket = sumBasket + (item.price * item.count)
    }
    return sumBasket
}

console.log(countBasketPrice(basket))

