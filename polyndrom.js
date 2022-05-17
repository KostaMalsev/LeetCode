/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    let N = s.length;
    
    if(N==1)return s;
    
    if(N==2 && s[0]==s[1]){ return s}
    if(N==2 && (s[0]!=s[1])){ console.log(N,s);return s[0]}
    
    
    let ll0 = (s.length-1) % 2 > 0 ? (s.length)/2 : (s.length-1)/2;
    
    let rr0 = ll0;
    
    let mxps = '';
    
    let path=[];
    
    function inPath(l,r)
    {
        for(let i=0; i < path.length; i++)
            {
                if(l == path[i].l && r ==path[i].r)
                    {
                        return true;
                    }
            }
        return false;
    }
    
    function pushToPath(l,r)
    {
        path.push({l:l,r:r});
    }
    
    
    //Gather polyndrom
    function trackPl(strt)
    {
        if(strt > N-1 || strt <0) {
            return ['',strt,strt];
        }
        let ps = s[strt];
        
        let d=1;
        
        while( (s[strt+d] == s[strt-d] ) && (strt+d)<N && (strt-d)>=0 )
            {
                ps= s[strt+d] + ps + s[strt-d];
                d++;                
            }
                
        let ps2 = '';
        d = 0;
        while( (s[strt-d] == s[strt+d+1]) && (strt+d)<N && (strt-d)>=0 )
            {
                ps2= s[strt-d]+ps2+s[strt+d+1];
                d++;
            }
        
        d = Math.max(1,d);
        
        ps = ps.length > ps2.length ? ps : ps2;
        let r = Math.min(strt+d,N);
        let l = Math.max(strt-d,0);
        
        //If the polyndrom is too small then move just a bit left and right
        if(strt-d >= ps.length) l = strt-1;
        if(N - (strt+d) >= ps.length) r = strt+1;
        
        console.log ('out',[ps,r,l]);
        
        return [ps,r,l];
        
    }
    
    
    function search(ll,rr){
        
    
        let ii=0;
        let str='';
        let l=0;
        let r=0;
                
        if( (ll < 0 && rr > N-1) || inPath(ll,rr) )
            {
                return;
                
            }else{ 

                pushToPath(ll,rr);

                //go left
                [str, r, l] = trackPl(ll);
                //console.log('left',l,r,str,mxps);
                if(mxps.length < str.length) mxps = str;
                search(l,r);

                //go right
                let out = trackPl(rr);
                str = out[0];r=out[1];l = out[2];
                [str, r, l] = trackPl(rr);
                
                //console.log('right',l,r,str,'mxps:',mxps);
                if(mxps.length < str.length) mxps = str;
                search(l,r);

                //console.log('iteration',ll,rr,mxps,str);

                ll = l;
                rr = r;


            }
    }
    search(ll0,rr0);
    //console.log('path=',path)

    
    return mxps;
    
};
