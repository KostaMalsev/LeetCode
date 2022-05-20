/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let triplets = [];
    
    
    
    function equal(a,b)
    {
        let matchc=0;
        let acp = [...a];
        let bcp = [...b];

        
                
        for(let i=0;i<3;i++)
            {
                for(let ii=0;ii<bcp.length;ii++)
                    {
                        if(acp[i]==bcp[ii]){
                            //acp[i]=null;
                            bcp.splice(ii, 1);
                            //bcp[ii]='k';
                            matchc++;
                        }
                    }
            }
        //if(b[0]==0 && b[1]==0 && b[2]==0)
        //    console.log(a,b,acp,bcp, matchc)
        if (matchc ==3) return true
        else return false;
    }
    
    
    function searchTriplet(trip)
    {
        for(let i=0;i<triplets.length;i++)
            {
                let tr = triplets[i];
                if( equal(tr,trip) ) return true;
            }
        return false;
    }
    
    
    for(let i=0;i<nums.length;i++)
        {
            for(let j=0;j<nums.length;j++)
                {
                    for(let k=0;k<nums.length;k++)
                    {
                        //console.log(i,j,k,nums[i],nums[j],nums[k])
                        let diffInd = i!=j && i!=k && j!=k;
                        
                        if( (nums[i]+nums[j]+nums[k] == 0) && diffInd && (!searchTriplet([nums[i],nums[j],nums[k]])) )
                            {
                                triplets.push([nums[i],nums[j],nums[k]]);
                            }
                    }
                }
        }
    return triplets;
    
};
