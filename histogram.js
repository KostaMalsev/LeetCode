/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    
    let N = heights.length;
    
    function miN(strt,stop)
    {
        
    }
    
    function area(strt,stop)
    {
        let min_=-1;
        for(let i=strt;i<stop;i++)
            {
                if(min_==-1)
                    {
                        min_ = heights[i];
                    }else{
                        if(min_ < heights[i]) min_ = heights[i];
                    }
            }
        
    }
    
    for(let wsize=1; wsize<=N; wsize++)
        {
            for(let strtInd=0; strtInd < N; strtInd++)
                {
                    
                }
        }
};
