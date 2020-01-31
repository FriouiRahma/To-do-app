let btn=document.querySelector('.btn-send');
let s=document.querySelector('.appen');
let f=document.querySelector('.form');

 btn.addEventListener('click',function(){
   
     let d=document.createElement('div');
     let t=document.createElement('button');
     t.innerHTML="Complete";
     t.classList.add('rahmabtn');
     
     let t1=document.createElement('button');
     t1.innerHTML="Delete";
     t1.classList.add('rahmabtn1')
      d.append(t);
      d.append(t1);
     
    //   if(f.value!="")
        
        // let val= document.createElement('p');
        // console.log(val);
        let ss= (f.value);
        // let pop= (val.innerHTML=ss);
        d.append(ss); 
        s.append(d); 
       
        t.addEventListener('click',function(){
        t.innerHTML="Undo";
        d.style.textDecoration="line-through";
        
        
   })
    //   }
         t1.addEventListener('click',function(){
         d.remove();
})





 })