function reverseNum(num){
    let reverString = num.toString().split("").reverse().join("");

    let reversNum = parseInt(reverString);

    return reversNum;

}
console.log(reversNum(12345));
