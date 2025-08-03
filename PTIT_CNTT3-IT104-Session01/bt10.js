function groupAnagrams(strs) {
  let map = {};
  for (let str of strs) {
    let key = str.split('').sort().join('');
    map[key] = map[key] || [];
    map[key].push(str);
  }
  return Object.values(map);
}

let input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));
