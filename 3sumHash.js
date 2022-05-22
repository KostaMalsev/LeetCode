/**
 * @param {number[]} nums
 * @return {number[][]}
 */




var threeSum = function(nums) {
    
    let tripletsF = new Array(nums.length).fill([]);
    let triplets = [];
    
    function hash(trip)
    {
        return (Math.abs(trip[0] - trip[1] + trip[2])) % nums.length;        
    }
    
    function pushToHash(a,b,c)
    {
        
    }
    
    function equal(a,b)
    {
        let matchc=0;
        let acp = [...a];
        let bcp = [...b];
        
        //console.log("@equal:",'a=',a,'b=',b)
               
        for(let i=0;i<3;i++)
            {
                for(let ii=0;ii<bcp.length;ii++)
                    {
                        if(acp[i]==bcp[ii]){
                            bcp.splice(ii, 1);
                            matchc++;
                            if(matchc==3) return true;
                        }
                    }
            }
        return false;
    }
    

    function searchTriplet(trip)
    {
         let hs = hash(trip);
         let i=0;
        
         if( tripletsF[hs].length == 0 ){
             //console.log(hs,trip)
            tripletsF[hs].push(trip);
            return false;
         }
        
         while(i< tripletsF[hs].length)
             {
                if(equal(trip,tripletsF[hs][i]))
                    {
                        return true;
                    }else i++;
             }
        //If no triplets with this hash existed, push the new triplet
        tripletsF[hs].push(trip);
        return false;
         
    }
    
    
    
    for(let i=0;i<nums.length;i++)
        {
            for(let j=i+1;j<nums.length;j++)
                {
                    for(let k=j+1;k<nums.length;k++)
                    {
                        //console.log(i,j,k,nums[i],nums[j],nums[k])
                        let diffInd = i!=j && i!=k && j!=k;
                        
                        if( (nums[i]+nums[j]+nums[k] == 0) && diffInd)
                            {
                               let foundTrip = searchTriplet([nums[i],nums[j],nums[k]]);

                                if(!foundTrip) 
                                    triplets.push([nums[i],nums[j],nums[k]]);
                                
                            }
                    }
                }
        }
    return triplets;
    
};
