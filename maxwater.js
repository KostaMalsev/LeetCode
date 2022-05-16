//Run on all widths
    for(let offset=0; offset<N-1;offset++)
    {
        for(let i=N-offset-1;i>0;i--)
        {
              let wd = i;
              //Calculate area between the borders:  
              let area = Math.min(height[offset],height[i+offset]) * wd;  
              if(maxArea< area) maxArea = area;
            //console.log(offset,offset + i,'||Area=',area,'maxArea=',maxArea);
         }
    }
    return maxArea;
