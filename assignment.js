
function cubeNumber(number) {
    const cube1 = Math.pow (number,3)
    const cube2 = Math.pow (number,3)
    console.log(cube1, cube2)
    if( number != typeof'number'){
        console.log("Not a valid input");
    }
}


function matchFinder(value1, value2) {
    if( (typeof value1) !== 'string' || (typeof value2) !== 'string'){
        return "Sorry, I accept string Only!"
    }

    else if (value1.includes(value2)==true){
        return true;

    }
    else {
        return false;
    }
}


function sortMaker(arr) {
var outputArray =[];
for ( var i = 0; i<3; i++){
    const element1 = arr[0];
    const element2 = arr[1];
    if(element1<0 || element2<0){
        return "Invalid Input";
    }
    else if (element1==element2){
        return "equal";
    }
    else {if (element1>element2){
        let temp = element1;
        element1=element2;
        element2=temp;
        let final = outputArray.push(element2,element1); 
        return outputArray;
    }
    else {
        let final = outputArray.push(element2,element1);
        return outputArray;
    }
}
}
}

function findAddress(obj) {
if (typeof obj !== "object"){
    return "Accept string only!"   
}
else{
    const street = obj.street;
    const house = obj.house || "__";;
    const society = obj.society || "__";
return street +',' + house +','+ society;
}
}


function canPay(changeArray, totalDue) {
    let total = 0;
    if (changeArray==0){
        return "Pay First!"
    }
    else {
        for(var i=0; i<changeArray.length; i++){
            let elements = changeArray[i];
            total = total+elements;
        }  
    }
    if (total>= totalDue){return true}
        else {return false}
}
