A = [1, 2, 3, 4]
B = [false, true, 'hello, ',10]
function render(list){
    for(i = 0;i < list.length; i++){
        document.write(list[i], '_')
    }
    document.write('<br />')
}
render(A);
A.push(2)
A.push(23)
render(A);
A.push(67)
A.splice(2, 3)
render(A);

render(B)
//-----------------------------------------
 function sum(a, b){
     console.log(a + b)
 }
 sum(10, 23)


 //-----------------------------------------
 function foo(value){
     value = (Math.pow(value, 5) + 200) /13

     return res;
 }


 arr = [6, 23, 23, 567, 213]

 for(i = 0; i < arr.length; i++){
     foo(arr[i]);
 }

 render(arr)
 //------------------------------------------
 function fillArr(A){
 for(i=0; i<A.length;i++){
     A[i]=Math.floor(Math.random)
 }
 }
 