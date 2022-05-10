/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    
    let N = heights.length;
    
    function miN(strt,stop)
    {
        let min_= heights[strt];
        let nz = 0;
        
        for(let i=strt;i<=stop;i++)
            {
                if( (min_ > heights[i]) && (heights[i]>0) ) {
                    min_ = heights[i];
                }
                //Count zeros
                if(heights[i]==0) nz++;
                
            }
        
        return [nz, min_];
    }
    
    
    function area(strt,stop)
    {
        [nz, height] = miN(strt,stop);
        let width = stop - strt+1-nz;
        let area = height*(width);//*Math.max(1,width);
        
        console.log(strt,stop,'||',height, width, area,nz);
        
        return area;
        
    }
    
    let maxArea=0;
    
    for(let wsize=1; wsize<=N; wsize++)
        {
            for(let strtInd=0; strtInd < N; strtInd++)
                {
                    let stop = Math.min(strtInd+wsize,N-1);
                    
                    let areA = area(strtInd, stop)
                    
                    if( maxArea < areA ) {
                        maxArea = areA;
                    }
                }
        }
    return maxArea;
};
