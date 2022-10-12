// orthogonal vector

function orthogonal(array1,array2){
    let dot_product = 0;
    for(b = 0; b < array2.length; b++){
        dot_product += array1[b] * array2[b] 
    }
    return dot_product == 0;
}
console.log(orthogonal([1,3],[3,-1]))


// insertion sort

function insertionSort(array){
    let min
    for(i = 1; [i] < array.length; i++){
        min = array[i]
        for(j = i-1; array[j] >min && array[j] > -1; j--){
            array[j+1] = array[j]
        }
    array[j+1] = min
    }
    return array
}
console.log(insertionSort([9,8,2,2,3,7,1,6,5,4,3,1,2,1,1,0]))