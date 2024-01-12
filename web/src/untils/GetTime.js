export const dateOne =(e) =>{
    let d=new Date(e);
    let Y=d.getFullYear();
    let M=d.getMonth()+1;
    let D=d.getDate();
    let H=d.getHours();
    let M1=d.getMinutes();
    let S=d.getSeconds();
    if(D<10){
        D='0'+D;
    }
    if(M<10){
        M='0'+M;
    }
    if(H<10){
        H='0'+H;
    }
    if(M1<10){
        M1='0'+M1;
    }
    if(S<10){
        S='0'+S;
    }
    let dates = Y+'/'+M+'/'+D+' '+H+':'+M1+':'+S;
    return dates;
}