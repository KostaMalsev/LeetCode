/** * @param {string} s * @return {number} */
var lengthOfLongestSubstring = function(s) {
  let hasBeenArr = new Array(128).fill(-1);
  let sstring = '';
  while (s.length > 0) {
    let sLength = s.length;
    let i = 0;
    hasBeenArr.fill(-1, 0, 127);
    while (i < sLength) {
      let hasBeen = hasBeenArr[s[i].charCodeAt(0)];
      if (hasBeen > -1) {
        if (sstring.length < i) { //Store the longest string:                         
          sstring = s.substring(0, i);
        }
        //Slice the relevent part for future search iteration:                    
        s = s.substring(hasBeen + 1, s.length);
        break; //exit the inner loop                                          
      } else {
        //Store in hash                      
        hasBeenArr[s[i].charCodeAt(0)] = i;
      }
      i++;
    } //In case we at the end of the string:          
    if (i == sLength && (s.length > sstring.length)) {
      sstring = s;
      break;
    }
    if (i == sLength) {
      break;
    }
  }
  return sstring.length;
};