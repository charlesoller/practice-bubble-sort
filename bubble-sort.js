
function bubbleSort(arr) {
  let isSwapped = true;
    // Iterate through the array
    while(isSwapped){
      isSwapped = false;
      for(let i = 0; i < arr.length; i++){
      // If the current value is greater than its neighbor to the right
        // Swap those values
        if(arr[i] > arr[i+1]){
          [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
          // Do not move this console.log
          console.log(arr.join(","));
          isSwapped = true;
        }
    // If you get to the end of the array and no swaps have occurred, return
      }
    }
    // Otherwise, repeat from the beginning
}

module.exports = bubbleSort;
