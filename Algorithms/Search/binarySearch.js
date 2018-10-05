function binarySearch(arr, find){
    let pivot = Math.floor(arr.length / 2);
    if(arr.length <= 1 ){
      console.log(arr)
      return -1;
    }
    if(arr[pivot] === find){
      return arr[pivot];
    }
    if(arr[pivot] > find){
      return binarySearch(arr.slice(0, pivot), find);
    }
    if(arr[pivot] < find){
      return binarySearch(arr.slice(pivot), find)
    }
  }