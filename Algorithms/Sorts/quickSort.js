function quickSort(arr){
    if(arr.length <= 1){
      return arr;
    }
  
    let compare = arr.splice(0,1);
    let left = [];
    let right = [];
  
    for(num of arr){
      if(num <= compare){
        left.push(num)
      }
      if(num > compare){
        right.push(num);
      }
    }
    return quickSort(left).concat(compare).concat(quickSort(right));
  }