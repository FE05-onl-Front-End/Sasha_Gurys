// я решил усложнить себе задачу следующим образом:
//  - объединить первые три задания в одно условиями
//  - направление елки, количество "ярусов" или строк, что используется в качестве "иголок" (вместо звездочек или звездочки), вид елки (как в 1 и 2 задании или как в 3) задаются пользователем
//  - если что-то введено неверно, указать конкретно что введено неверно

// !!!!!! будет ошибка в том, что если вводится вместо звездочки больше одного символа, то целая елка съедет влево, примерно представляю как это исправить, но я поздновато за это все сел, уже час ночи, лень:)). там надо отследить кол-во символов и домножить пробелы на это число я полагаю. хочу еще 4-е задание успеть сделать до сна

// спрашиваем направление
let direction = prompt("Up or Down?").toLowerCase();
// спрашиваем сколько строк должно быть у елки
let levels = +prompt("How many levels do we want our tree to be? (A number, please)");
// из чего строится наша елка (вместо или сами *)
let needle = prompt("What's gonna be our needle?");
// спрашиваем половинчатая елка как в 1 и 2 задании или целая как в 3 задании
let treeType = prompt("Half or Whole?").toLowerCase();


if (Number.isInteger(levels) && levels > 0) {

    if (treeType == "half") {

        if (direction == "up") {

            for (let i = 0; i < levels; i++) {
                console.log(needle.repeat(i + 1));
            }

        } else if (direction == "down") {

            for (let i = levels; i > 0; i--) {
                console.log(needle.repeat(i));
            }

        } else {

            console.log("we ain't making a tree if you don't give it a proper direction, bro");

        }


    } else if (treeType == "whole") {

        if (direction == "up") {

            for (let i = 0; i < levels; i++) {
                console.log(" ".repeat(levels - (i + 1)) + needle.repeat(i * 2 + 1));
            }

        }


        else if (direction == "down") {

            for (let i = levels - 1; i => 0; i--) {

                console.log(" ".repeat(levels - i - 1) + needle.repeat(i * 2 + 1));

            }

        } else {

            console.log("we ain't making a tree if you don't give it a proper direction, bro");

        }

    } else {

        console.log("we ain't making a tree if you don't give it a proper type, bro");

        if (direction != "up" && "down") {

            console.log("we ain't making a tree if you don't give it a proper direction, bro");

        }

    }

} else {

    console.log("we ain't making a tree if you don't give it a proper number of levels, bro");

    if (treeType != "half" && treeType != "whole") {

        console.log("we ain't making a tree if you don't give it a proper type, bro");

    }

    if (direction != "up" && direction != "down") {

        console.log("we ain't making a tree if you don't give it a proper direction, bro");

    }

}



