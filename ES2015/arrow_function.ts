var getRegularvalue = function(){
    return 10;
}
console.log(getRegularvalue());

const getArrowvalue = () => {
    return 20;
}
console.log(getArrowvalue());

const getArrowvalue2 = () => 30;
console.log(getArrowvalue2());

const getArrowvalue3 = (num: number) => num*10;
console.log(getArrowvalue3(5));

const getArrowvalue4 = (salary: number, bonus: number) => 10*salary+bonus;
console.log(getArrowvalue4(1000, 500))

console.log(typeof getArrowvalue4);



