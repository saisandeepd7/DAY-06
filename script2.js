//1
let fname=10.5; 
fname = "Guvi";
let lname = "geek";//lname not defined
let name = fname+lname;
alert( `hello ${name}` );//missing '`'

//2
var a = 2 > 12;//double quotes should be removed to get diffused.
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

//3
let b = prompt("Enter a number?");
a=parseInt(b);//by adding this we will get success. 
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

//4
let value = parseInt(prompt('How many runs you scored in this ball'));//addind parseInt
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

//5
let message;
let lock = null;// lock should be equal to null.
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

//2 loops
//1
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) { //i-- should be repaced with i++.
 new_string += numsArr[i] 
}
console.log(new_string);

//2
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = new String(numsArr[10]);
 
for (var i = 9; i >= 0; i--) {  //repace 11 by 9 and i is greater than or equal to 0.
 new_string += " "+ numsArr[i] 
}

//3
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even" //odd is replaced by even.
 }
}
console.log(numsArr);

//4
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if((i+1) %2 == 0 )//(i+1).
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

//5
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;//sum is intially 0.
for (var i = 0; i <=10; i++) {
 
 sum += numsArr[i]
}
console.log(sum);

//(3)
//1
aa = (f,s,t) => {
    //let f,s,t; f s t are already defined
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
aa(1,2,3);

//2
let n = "123";
console.log(add(n));
function add(n)
{
let sum = 0;// sum is 0.
for(var i=0;i<n.length;i++){
 sum+= parseInt(n[i])

 }
 return sum;
}

//3
//const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){ //i less than arr.length.
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})();

//4
var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i <= arr.length; i++) { //here array is arr.
 console.log(arr[i].toUpperCase() + arr[i].substr(1));
 }
}
ano();