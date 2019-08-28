function getIndexToIns(arr, num) {

    arr.sort(function(a, b) {
    return a - b;
    });
  
    var i = 0;
    while (num > arr[i]) {
    i++;
    }
  
    return i;
  }
  
  console.log(getIndexToIns([40, 41, 44, 99, 32, 60], 50));