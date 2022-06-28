/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    
    
    let result = false;
    let n = rowSum.length-1;
    
    
    
    
    function step(si,sj,a,i,j,path,count)
    {
        si = si - a;
        sj = sj - a;
        
        if(i==n && j==n && si >= 0 && sj>=0 && si!=sj)
            {
                console.log('found si,sj:',si,sj,'path=',path,'|',i,j,'count:',count);
                
                result = true;
                
                return;
            }
        
        if(si < 0 || sj < 0 || i < 0 || j < 0 || i > n || j > n)
            {
                if(si < 0 || sj < 0 || si==sj)
                    console.log('failed path/ij',path,i,j);
                //console.log('reached wall',path,'count:',count)
                return;
                
            }else{
                
                
                
                //console.log('into:si,sj:',si1,sj1,'count:',count,'start:',Math.min(si,sj),'->',Math.max(si,sj),'[',i,j,']');
                let si1 = rowSum[i];
                let sj1 = colSum[j];       
                
                for(let ii=Math.min(si,sj); ii<=Math.max(si,sj); ii++)
                    {
                        
                        let s = ('['+i+','+j+','+ (ii) +']');
                        path+=s;
                        step(si1,sj1 ,ii,i+1,j,path,count+1);
                        
                        step(si1,sj1 ,ii,i,j+1,path,count+1);
                        
                    }
                return;
            }
    }
    
    step(rowSum[0],colSum[0],0,0,0,'',0);
    
    return [[],[]];
    
};
