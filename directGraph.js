/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function(n, edges, source, destination) {
    
    
    let hs={};
    let count = 0;
    let valid = true;
    let edgesH={}
    
    function getnext(node,edges)
    {
        if(edgesH[node]!==undefined)
         return edgesH[node]
        else return null;
    }
    
    function move(node,nexta,count,path)
    {
        
        if(node == destination)
            {
                count++;
                console.log('reached destination');
                return;
            }else{
                
                if(hs[nexta.toStirng()]!==undefined)
                    {
                        valid = false;
                        return;
                    }else{
                        
                        
                    }
            }
    }
    
};
