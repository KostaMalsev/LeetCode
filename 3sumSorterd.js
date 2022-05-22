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
    
    function equal(a,b)
    {
        let amx = Math.max(a[0],a[1],a[2]);
        let amin  = Math.min(a[0],a[1],a[2]);
        
        let bamx = Math.max(b[0],b[1],b[2]);
        let bmin = Math.min(b[0],b[1],b[2]);
        
        return (amx==bamx && amin == bmin);
    }

    function searchTriplet(trip)
    {
         let hs = hash(trip);
         let i=0;
        
         if( tripletsF[hs].length == 0 ){
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
    
    function sortArr()
    {
        nums.sort((a, b) => a - b);
    }
    
    function sorta(arr)
    {
        arr.sort((a, b) => a - b);
    }
    
    function binarySearch(start,end, key){
        
        while (start <= end) {
            let middle = Math.floor((start + end) / 2);

            if (nums[middle] === key) {
                // found the key
                return middle;
            } else if (nums[middle] < key) {
                // continue searching to the right
                start = middle + 1;
            } else {
                // search searching to the left
                end = middle - 1;
            }
        }
        // key wasn't found
        return -1;
    }
    
    
    
    sortArr();
    
    let ptrmin = 0;
    let ptrmx = nums.length-1;
    let finished = false;
    
    while(ptrmin < nums.length-1){
        ptrmx = nums.length-1;
    while(ptrmx > 0)
        {
            let third = -(nums[ptrmin] + nums[ptrmx]);
            
            let i = binarySearch(ptrmin+1,ptrmx-1, third);
            
            if(i >-1){
                
                let foundTrip = searchTriplet([third,nums[ptrmin],nums[ptrmx]]);
                
                if(!foundTrip){ 
                    let trip = [third,nums[ptrmin],nums[ptrmx]];
                    sorta(trip);
                    triplets.push(trip);
                }
            }
            
            //promote couunters:
            ptrmx--;
            
        }
        ptrmin++;
    }
    
    
    return triplets;
    
};
