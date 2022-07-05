var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
    
    let labelsA = [];
    let mainA = [];
    let luse={};
    
    //sort indices by values descending. original index is the key.
    let dict={};
    
    values.forEach((v,i)=>{
        
        mainA.push({v:v,i:i,l:labels[i]});
        
        luse[labels[i]] = 0;
        
    });
    
    let lluse = Object.values(luse);
    let keys = Object.keys(luse);
    
    keys.forEach((k,i)=>{
        dict[k] = i;
    });
    
    
    
    
    
    mainA.sort((a,b)=>b.v-a.v);
    
    let indP=[];
    
    mainA.forEach(el=>{
        
       indP.push(el.i); 
    
    });
    
    //console.log('start:',indP)
    
    
    let sumX = Number.MIN_VALUE;
    
    function bf(valueInd,inda,luse,sum, count,path)
    {
        
        if(inda.length ==0 || count > numWanted)
            {
                if(count <= numWanted)
                    sum+=values[valueInd]
                sumX = Math.max(sumX,sum);
                //console.log('sum:',sum,'path:',path,'count:',count,'inda:',inda);
                return;
                
            }else{
                
                let val = values[valueInd];
                
                luse[dict[labels[valueInd]]]++;
                
                sum+=val;
                
                sumX = Math.max(sumX,sum);
                
                let newInda=[];
                
                inda.forEach(ind=>{
                    
                   if( luse[dict[labels[ind]]] < useLimit)
                       newInda.push(ind);
                    
                });
                
                
                
                for(let i=0; i<newInda.length;i++)
                    {
                        let tmp = newInda.slice();
                        
                        tmp.splice(i,1);
                        bf(newInda[i],tmp.slice(),luse.slice(),sum,count+1,'');
                        
                    }
                
                return;
            
            }
    }
    
    //TODO: try to use other start indices...
    
    
    bf(indP[0], indP.slice(1), lluse.slice(), 0, 1,''+ values[indP[0]]);
    
    return sumX
    
};
