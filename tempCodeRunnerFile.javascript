function deleteNth(arr,n){
  let counter = {};
  
	for(let num of arr){
  	counter[num] = 0;
  }

  arr.forEach(item => {
  	counter[item] = 0;
  });
  
  
  for(let num in counter){
 		while(counter[num] > 0){
    arr.splice(arr.lastIndexOf(num), 1);
     arr.forEach(item => {
  	counter[item]++;
  });
  console.log(arr);
    }
  }
 

  return counter;
}

console.log(deleteNth([20,37,20,21], 1));