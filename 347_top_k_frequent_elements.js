function topKFrequentElements(nums, k) {
    const frequencyMap = new Map();

    nums.forEach(num => {
       frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
   });
   
   const sortedElements = [...frequencyMap.keys()].sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a));
   
   return sortedElements.slice(0, k);
}

console.log(topKFrequentElements([1, 1, 1, 2, 2, 3], 2)); // [1, 2]