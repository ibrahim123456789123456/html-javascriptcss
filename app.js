document.addEventListener('DOMContentloaded',function(){
    let wrapper = document.getElementById('wrapper');
    let toplayer = document.querySelector('.top');
    let hanlde = document.querySelector('handle');
    let skew = 0;
    let delta =;

    if(wrapper.className.indexOf('skewed')!=-1){
        skew = 990;
    }
    wrapper.addEventListener('mousemove', function(e){
        delta = (e.clientX - window.innerWidth/2)*0.5;
        hanlde.style.left = e.clientX + delta +'px';
        toplayer.style.width = e.clientX + skew +delta +'px';

    });
    
    
});