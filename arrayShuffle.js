let fnc = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {

        // generating random number
        let j = Math.floor(Math.random() * (i + 1));
        // swapping arr[i] and arr[j]
        let c = arr[i];
        arr[i] = arr[j];
        arr[j] = c;
    }
    console.log( "shuffled arry " + arr) ; 
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("originial array :- " + arr)
fnc(arr); 