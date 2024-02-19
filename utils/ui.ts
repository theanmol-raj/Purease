export const transitionNavBar = (f:any) =>{
    if(window.scrollY>100){
        f(true);
    }else{
        f(false);
    }
}