let usersAge = {
    ivanov: '19',
    petrov: '17',
    sidorov: '21',
    litrov: '7',
    bolov: '14',
    starov: '88',
    molodov: '18'
 }

 const underAge = [];
 const adult = [];
 const belowAverage = [];
 const average = [];
 const aboveAverage = [];

 Object.entries(usersAge).forEach(([surname, age]) => {


    if (age < 18) {
        underAge.push( Object.fromEntries([['last name', surname], ['age', age]]) )
    } else {
        adult.push( Object.fromEntries([['last name', surname], ['age', age]]) )
    }


    if (age < 15) {
        belowAverage.push( Object.fromEntries([['last name', surname], ['age', age], ['performance', 'below average']]) )
    } else if (age < 20) {
        average.push( Object.fromEntries([['last name', surname], ['age', age], ['performance', 'average']]) )
    } else {
        aboveAverage.push( Object.fromEntries([['last name', surname], ['age', age], ['performance', 'above average']]) )
    }


 } ); 

 // делаю без ${} потому что так отображается в консоли лучше, не смог нагуглить фиксу
 console.log('несовершеннолетние: ', underAge, 'совершеннолетние: ', adult,);
 console.log('несовершеннолетние: ', belowAverage, 'несовершеннолетние: ', average,'несовершеннолетние: ', aboveAverage);

 