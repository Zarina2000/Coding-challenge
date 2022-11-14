const read = require('readline-sync')
var n = 4;
var names = []
for (let i = 0; i < n; i++) {
    names[i] = read.question('Enter passenger name: ');
}
for (let i = 0; i <n; i++) {
    console.log(names[i]);
}
//Sort elements in ascending order
console.log("Ascending order :")
for (let i = 0; i < n; i++) {

    for (let j = i + 1; j < n; j++) {
        if (names[i] > names[j]) {
            let temp = names[i];
            names[i] = names[j];
            names[j] = temp;
        }
    }

}
for (let i = 0; i < n; i++) {
    console.log(names[i]);
}

//Sort elements in decending order
console.log("Decending order :")
for (let i = 0; i < n; i++) {

    for (let j = i + 1; j < n; j++) {
        if (names[i] < names[j]) {
            let temp = names[i];
            names[i] = names[j];
            names[j] = temp;
        }
    }

}
for (let i = 0; i < n; i++) {
    console.log(names[i]);
}

//search elements
var count = 0
var name = read.question("Enter the name to search");
for (let i = 0; i < n; i++) {
    if (name == names[i]) {
        console.log("Name is present in the array :", names[i])
        count += 1;
    }

}
if (count == 0) {
    console.log("searched name is not present in array")
}


//length of elements in the array
var len;
for (let i = 0; i < n; i++) {
    len = 0;
    a = names[i]
    for (let j = 0; a[j] != undefined; j++) {
        len += 1;

    }
    console.log("length of " + a + " is " + len);
}

// Split names at spaces
console.log("split passenger name ");

  for (let i = 1; i <= n; i++) {

    let name = names[i - 1];

    let nameArray = name.split(" ");

    console.log(`${nameArray}`);

  }

  //duplicate 
  var dupli=[];
  for(let i=0;i<n;i++){
      for(let j=i+1;j<n;j++)
      {
          if(names[i]==names[j])
          {
              dupli[i]=names[i];
          }
      }
  }
  console.log(dupli)