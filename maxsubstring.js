/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let hasBeenArr = [];
    hasBeenArr.fill(-1,0,127);
    let sstring = '';
    
    
    while(s.length>0)
        {
            let sLength = s.length;
            let i=0;
            hasBeenArr.fill(-1,0,127);

                while(i < sLength)
                {
                    let hasBeen = hasBeenArr[s[i].charCodeAt(0)];
                    if( hasBeen > 0 ){
                        if(sstring.length < i){
                            //Store the longest string:
                            sstring = s.substring(0, i-1);
                        }
                            
                        //Slice the relevent part for future search iteration:
                        s = s.substring(hasBeen,s.length);
                        
                        break; //exit the inner loop
                    }else{
                        //Store in hash
                        hasBeenArr[s[i].charCodeAt(0)] = i;
                    }
                i++;
                }
            
            //Residue string:
            if( i==sLength && s.length>0){
                console.log(s,i,hasBeenArr[s[s.length-1].charCodeAt(0)],sLength);
                let hasBeen = hasBeenArr[s[s.length-1].charCodeAt(0)];
                
                if(sstring.length == 0 )
                    {
                        
                        if(hasBeen <= sLength-1 && hasBeen > 0)
                            sstring = s.substring(hasBeen,s.length-1);
                        else sstring = s;
                    }
                break;            
            }
        }
    console.log(sstring)
    return sstring.length;
};
