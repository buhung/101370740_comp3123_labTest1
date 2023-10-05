function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
      let filteredArray = mixedArray.filter(item => typeof item === "string");
      let lowerCaseArray = filteredArray.map(item => item.toLowerCase());
  
      if (lowerCaseArray.length > 0) {
        resolve(lowerCaseArray);
      } else {
        reject("No lowercase words found in the array.");
      }
    });
  }
  
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  lowerCaseWords(mixedArray)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });