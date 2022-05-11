/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    
    let N = heights.length;
    
    
    function miN(strt,stop)
    {
        let min_= heights[strt];
        
        for(let i=strt;i<=stop;i++)
            {
                if( (min_ > heights[i]) && (heights[i]>0) ) {
                    min_ = heights[i];
                }
                
            }
        
        return min_;
    }
    
    
    
    function area(strt,stop)
    {
        
        let area = 0;
        let mxAreal = 0;
        let zfound = false;
        let minHeight=heights[strt];
        let lstZ = strt;
        
        let height, width;
        
        //Start collecting areas:
        for(let i=strt;i<=stop;i++)
            {                
                //If zero is reached, restart collecting and update the max
                if(heights[i] == 0)
                {
                       //Get minimal height of the group
                       height =  miN(strt,i);
                       width = Math.max(i - lstZ - 1, 1);
                       area = height * width;
                    
                        if(mxAreal < area) mxAreal = area;
                       
                       area = 0;
                       lstZ = i;
                       zfound = true;
                }
                
                
                //Store the minimal height:
                if( heights[i] < minHeight && heights[i] > 0 ) minHeight = heights[i];
                
                if(mxAreal < area) mxAreal = area;   
            }
    
        
        
        //If no zeros found, use the minimal
        if(!zfound)
            {
                height = minHeight;
                width = stop - strt + 1;
                area = height * width;
                mxAreal = area;
            }
        
        //console.log(strt,stop,'||',mxAreal,height,width);
        
        return mxAreal;
        
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
