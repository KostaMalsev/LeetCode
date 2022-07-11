/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {
    
    
    function rel(q,w,group)
    {
        
        if(group.length==0)
            return w;
        let sum=0;
        let qua = 0;
        group.forEach(worker=>{
            sum+=worker.w;
            qua+=worker.q;
        });
        
        let ratio = q/(qua/(group.length));
        
        if(w > sum*ratio)
        {
            console.log('less than minimal wage of worker',w,sum*ratio,ratio)
            return w;
        }else{
            return sum*ratio;
        }
    }
    
    let main = [];
    
    for(let i=0;i<quality.length;i++)
        {
            main.push({q:quality[i],w:wage[i],r:wage[i]/quality[i]});
        }
    
    main.sort((a,b)=>a.r-b.r);
    
    
    
    //console.log(main)
    
    let wgroup=[];
    
    let totWage = 0;
    
    wgroup.push(main.shift());
            
    while(wgroup.length <= k && main.length > 0)
    {
                    
        let min = Number.MAX_VALUE;
        let jj = -1;
        let j=0;                    
        let worker = wgroup[wgroup.length-1];
        //console.log(worker)
                    
        while(j < main.length)
        {
            let wageW = rel(worker.q,worker.w,wgroup);
            
            //console.log(wageW)
            
            if(min > wageW)
            {
                jj = j;
                min = Math.min(min,wageW);
            }
            j++;
        }
                    
        let el = main.splice(jj,1);
        console.log('ff',wgroup)
        wgroup.push(el[0]);
        totWage+=min;

    }

    return totWage;    
    
    
};
