const No=document.getElementById('No');
function run_button(){
    y= Math.floor(Math.random()*600);//по вертикали
    x= Math.floor(Math.random()*400);//по горизонтали
    No.style.left = `${x}px`
    No.style.top = `${-y}px`
}
No.addEventListener('mousemove', run_button);