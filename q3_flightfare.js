const read = require('readline-sync')
var n = 4;
var fares = []
for (let i = 0; i < n; i++) {   
    fares[i] = read.questionFloat('Enter flight fares in decimal format ');
}
for (let i = 0; i <n; i++) {
    console.log(fares[i]);
}
//Sort elements in ascending order
console.log("Ascending order :")
for (let i = 0; i < n; i++) {

    for (let j = i + 1; j < n; j++) {
        if (fares[i] > fares[j]) {
            let temp = fares[i];
            fares[i] = fares[j];
            fares[j] = temp;
        }
    }

}
for (let i = 0; i < n; i++) {
    console.log(fares[i]);
}
console.log("maximum fare is "+fares[0])

//Sort elements in decending order
console.log("Decending order :")
for (let i = 0; i < n; i++) {

    for (let j = i + 1; j < n; j++) {
        if (fares[i] < fares[j]) {
            let temp = fares[i];
            fares[i] = fares[j];
            fares[j] = temp;
        }
    }

}
for (let i = 0; i < n; i++) {
    console.log(fares[i]);
}
console.log("minimum fare is "+fares[n-1])

//search elements
var count = 0
var fare = read.question("Enter a fare to search");
for (let i = 0; i < n; i++) {
    if (fare == fares[i]) {
        console.log("Fare is present in the array :", fares[i])
        count += 1;
    }

}
if (count == 0) {
    console.log("searched fare is not present in array")
}



  //duplicate 
  var dupli=[];
  for(let i=0;i<n;i++){
      for(let j=i+1;j<n;j++)
      {
          if(fares[i]==fares[j])
          {
              dupli[i]=fares[i];
          }
      }
  }
  console.log(dupli)