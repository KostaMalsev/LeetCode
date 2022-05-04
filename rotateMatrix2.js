/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    /* Get the next coordinate*/
    function trCoord(row,col,dim){
        console.log('[row,col]:',[(col+(dim-1)) % (dim-1), Math.min(row+dim-1,dim-1)],row)
        return [(col+(dim-1)) % (dim-1), Math.min(row+dim-1,dim-1)]; //[col,row]
    }
    
    let N = matrix[1].length;
    
    let tmp=0;
    let valToMove=0;
    
    let row=0;
    let col=0;
    let nextRow,nextCol=0;
    let firstToMove=-1;
    let lastDim=-1;
    let dim = N;
    
    let ii=0;
    
    while (ii < N*N)
        {
            /*Init :*/
            if(firstToMove == -1 && lastDim!=dim)
                {
                    firstToMove = matrix[row,col];
                    lastDim = dim;
                    
                    /* Select the next element*/
                    [nextRow,nextCol] = trCoord(row,col,dim);
                    tmp = matrix[nextRow,nextCol];
                    valToMove = firstToMove;
                }else{
                    /* Select the next element*/
                    [nextRow,nextCol] = trCoord(row,col,dim);
                    tmp = matrix[nextRow,nextCol];
                    valToMove = tmp;
                }
            
                console.log(nextRow,nextCol,dim)
            
            
            /*Replace and move to the next*/
            matrix[nextRow,nextCol] = valToMove;
            
            row = nextRow; col = nextCol;
            
            /*Move to the next dimension if did the full circle*/
            if(matrix[row,col] == firstToMove && lastDim == dim){
               // dim--;
            }
            
            ii++;
            
        }
};
