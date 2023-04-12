console.log("hello");

// 1) Addition of two Number
var n1 = 1, n2 = 3;
var sum = n1 + n2;
console.log("sum of two number is", +sum);
 /* output =>sum of two number is 4 */


// 2) square root of number 
var num = 4;
var result = Math.sqrt(num);
console.log("Square root of number is", +result);
/*Output =>Square root of number is 2 */

// 3) find the square of number.
var num = 4;
var sqr = num * num;
console.log("Square of Number is", +sqr);
/*output =>Square of Number is 16 */

// 4) swapping of two number
/*  With using 3rd variable */
var a = 2, b = 4;
var temp;
temp = a;
a = b;
b = temp;
console.log("After swapping a is", + a + " and b is ", +b);

/* output => After swapping a is 4 and b is  2*/

//5) Without using 3rd Variable*/
var a = 1, b = 3;
a = a + b;
b = a - b;
a = a - b;
console.log("After swapping a is", + a + " and b is ", +b);
/*output=>After swapping a is 3 and b is  1 */


// 6) positive and negative number
var num = 5;
if (num > 0) {
    console.log("Number is Positive");
} else {
    console.log("Number is Negative");
}
/*Output => Number is Positive*/

// 7) Even and odd Number
var num = 4;
if (num % 2 == 0) {
    console.log("Number is Even");
} else {
    console.log("Number is odd");
}
/*Output=> Number is Even*/

// 8) Find the Largest Number Among 3 Number;
var n1 = 10, n2 = 20, n3 = 30;
var largest;
if (n1 >= n2 && n1 >= n3) {
    largest = n1;
} else
    if (n2 >= n1 && n2 >= n3) {
        largest = n2;
    } else {
        largest = n3;
    }
console.log("Largest Number is : ", +largest);
/*output =>Largest Number is :  30 */

// 9) Check the number is prime or not.
var num = 7;
var count = 0;
for (i = 1; i <= num; i++) {
    if (num % i == 0) {
        count++;
    }
}
if (count == 2) {
    console.log("Number is Prime");
} else {
    console.log("Number is Not Prime");
}
/*Output =>Number is Prime*/

//10) Find the Factorial of Number.
var num = 5;
var fact = 1;
for (i = 1; i <= num; i++) {
    fact = fact * i;
}
console.log("factorial of Number is :", +fact);
/*Output=>factorial of Number is : 120 */

//11) Multiplication Table

// 12) Fibonacci series
var num = 10;
var a = 0; b = 1;
var c;
console.log("Fibonacci series");
for (i = 1; i <= num; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}
/*Output=> Fibonacci series 0 1 1 2 3 5 8 13 21 34*/


// 13) Armstrong Number(153) ;
var sum = 0;
var num = 153;
var temp = num;
while (temp > 0) {
    var r = temp % 10;
    sum += r * r * r;
    temp = parseInt(temp / 10)
}
if (sum == num) {
    console.log(num + " is Armstrong  number");
} else {
    console.log("Not Armstrong Number");
}
/*Output=>153 is Armstrong  number */

// 14) Sum of Natural Number;
var num = 10;
var sum = 0;
for (i = 1; i <= num; i++) {
    sum = sum + i;
}
console.log("Sum of natural number is", +sum);
/*output=> Sum of natural number is 55*/

// 15) Find the reverse Number
var rem, temp, sum = 0;
var num = 12345;
temp = num;
while (num > 0) {
    rem = num % 10;
    sum = sum * 10 + rem;
    num = parseInt(num / 10);
}
console.log("reverse number is:", +sum)
/*Output => reverse number is: 54321 */

// 16) To check whether the number is palindrome or not.
var rem, temp, sum = 0;
var num = 121;
temp = num;
while (num > 0) {
    rem = num % 10;
    sum = sum * 10 + rem;
    num = parseInt(num / 10);
}
if (sum == temp) {
    console.log("Number is Palindrome");
} else {
    console.log("not palindrome number");
}
/*Output =>Number is Palindrome*/



// ******************Array and string program*********************//
const arr = [1,2,3,4,5,1,2];
var str = "priyanka";

// 1) Sum of array elements
var sum=0;
for(i=0;i<arr.length;i++){
    sum=sum+arr[i];
}
console.log("Sum of array elements is :" ,+sum);
/*output=> Sum of array elements is : 18*/

// 2) Find the even number in the array.
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
}
/*Output=> 2 4 2*/


// 3) print the array element in the reverse order.
//same as string
var revNum = [];  
for (i = arr.length - 1; i >= 0; i--) {
    revNum.push(arr[i]);
}
console.log(revNum);
/*Output =>  [2, 1, 5, 4,3, 2, 1]*/

//4) Reverse the string
var revStr = "";  
for (i = str.length - 1; i >= 0; i--) {
    revStr +=str[i];
}
console.log(revStr);
/*Output=>aknayirp */

// 5) Find the Largest Elements in the array
var temp;
for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

}
console.log("Largest Number is", +arr[0]);
/*Outout => Largest Number is 5 */

// 6) Find the smallest Number in the array.
var temp;
for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

}
console.log("Smallest Number is", +arr[0]);
/*Output=> Smallest Number is 1*/

// 7) Find the 2nd Largest Number in the array
var a1=arr[0];
var a2=arr[0];
for(i=0;i<arr.length;i++){
  if(arr[i]>a1){
    a2=a1;
    a1=arr[i];
  }else if(arr[i]>a2){
    a2=arr[i];
  }
}
console.log("second largest number is",+a2);
/*Output=>second largest number is 4 */

// 8) sort the array Desending order.
var temp;
for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
 console.log("Display the element in Decending order");
    for(i=0;i<arr.length;i++){
        console.log(arr[i]);
    }

/*Output=>Display the element in Decending order 5 4 3 2 2 1 1 */


//9) Sort the Element in the asending order.
var temp;
for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
 console.log("Display the Element in Ascending order");
    for(i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    /* output =>Display the Element in Ascending order 1 1 2 2 3 4 5*/


// 10) Remove the duplicate elements in the array and print only unique element
var b=[];
for(i=0;i<arr.length;i++){
  if(b.indexOf(arr[i])=== -1){
    b.push(arr[i]);
  }
}
console.log(b);

/* output => [ 1, 2, 3, 4, 5 ]*/


// 11) Display the duplicate elements in the array.(same as string)
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            console.log(arr[j]);
        }
    }
}
/*output=> 1 2*/

// 12) Display the duplicate character in the string
for(i=0;i<str.length;i++){
    for(j=i+1;j<str.length;j++){
        if(str[i]==str[j]){
            console.log(str[j]);
        }
    }
} 
/*Output =>a */


// 13) Count the Duplicate elements in the Array (Same as String)
var count=0;
for(i=0;i<arr.length;i++){
  for(j=i+1;j<arr.length;j++){
    if(arr[i]==arr[j]){
      count ++;
    }
  }
}
console.log("Number of duplicates elements in the array",+count);
/*output=>  Number of duplicates elements in the array 2*/

//  14) Count the duplicate character in the string
var count=0;
for(i=0;i<str.length;i++){
  for(j=i+1;j<str.length;j++){
    if(str[i]==str[j]){
      count ++;
    }
  }
}
console.log("Number of duplicates Character in the String",+count);
/*output =>Number of duplicates Character in the String 1 */


// 15) Count the occurances of elements. (same as string)
var c={};
for(i=0;i<arr.length;i++){
    var num=arr[i];
    c[num]=(c[num]||0)+1;
}
console.log(c);
/*output=> { '1': 2, '2': 2, '3': 1, '4': 1, '5': 1 }*/

// 16) Count the occurances of character in string.
var c={};
for(i=0;i<str.length;i++){
    var num=str[i];
    c[num]=(c[num]||0)+1;
}
console.log(c);
/*output=> { p: 1, r: 1, i: 1, y: 1, a: 2, n: 1, k: 1 }*/


// 17) Find the Missing Terms in the array.
const arrmiss=[1,2,3,5];
let total=((arrmiss.length+1)*(arrmiss.length+2))/2;
for( let i=0;i<arrmiss.length;i++){
  total=total-arrmiss[i];
}
console.log("missing number is",+total);
/*Output=>missing number is 4*/

// 18) Remove the duplicate character from the string
var b="";
for(i=0;i<str.length;i++){
  if(b.indexOf(str[i])=== -1){
    b +=(str[i]);
  }
}
console.log(b);
/*output=>priyank */

//19)Covert the uppercase character to lowercase and lowercase character to upper case.
var str="Priyanka";
var newWord=[];

 for(i=0;i<str.length;i++){
    if(str[i]==str[i].toLowerCase()){
        newWord[i]=str[i].toUpperCase();
    }else{
        newWord[i]=str[i].toLowerCase();
    }
 }
 console.log(newWord.join(""));


const fruits=['banana','apple','papaya','mango','orange'];  
   console.log(fruits.toString());
   console.log(fruits.join('*'));
   console.log(fruits.pop());
   console.log(fruits.push('pineapple'));
   console.log(fruits)
 /*   var x=fruits.push('pineapple')
   console.log(fruits) */
   console.log(fruits.shift());
   console.log(fruits)
   console.log(fruits.unshift('Lemon'));
   console.log(fruits)
  

const nameg=['priyanka','vaishnavi','shubhangi','ashvini','shivani'];
var merge=fruits.concat(nameg);
console.log(merge);

const array=[10,20,30,20,30];
array.splice(2,1,40,50);
console.log(array);
console.log(array.slice(2));
console.log(array.indexOf(20));
console.log(array.lastIndexOf(20)) 
console.log(array.reverse())

const array1=[1,4,9 ,16];
var map1=array1.map(x=> x*2);
console.log(map1);

var  str="priyanka"
var x=str.substring(2,5);
console.log(x);

var  str="priyanka gadekar"
var x=str.replace("priyanka","priyu");
 console.log(x);
 var  str="priyanka gadekar"
                  var x=str.charAt(4);
                 console.log(x)

                 console.log(null===undefined)

                 console.log('1'+2+3)

//Covert the uppercase character to lowercase and lowercase character to upper case.
var str="Priyanka";
var newWord=[];

 for(i=0;i<str.length;i++){
    if(str[i]==str[i].toLowerCase()){
        newWord[i]=str[i].toUpperCase();
    }else{
        newWord[i]=str[i].toLowerCase();
    }
 }
 console.log(newWord.join(""));



      
              
                 