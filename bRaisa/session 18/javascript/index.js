function showAndHide() {
    const x = document.getElementById("SectionName");
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    const y= document.getElementsByClassName
    console.log(x)
}

const likesbtn = document.getElementById('buttonlikes');
const likesspan = document.getElementById('spanlikes')
const btnhtml = document.getElementById('likesb')
let x=0;
likesbtn.addEventListener('click', function(event){
    event.preventDefault();
      if(x===0){  
        likesspan.innerHTML='11 likes';
        btnhtml.style.color='blue'
        x=1 

     }
     else{
        likesspan.innerHTML='10 likes';
        btnhtml.style.color='black'
        x=0
     }
     console.log(x)
   
    }
)

const sharebtn=document.getElementById('share')
const sharebtnhtml=document.getElementById('sharehtml')
const comments=document.getElementById('15')

let i=15;
sharebtn.addEventListener('click', function(event){
    event.preventDefault(); 
     if(i>0){ comments.innerHTML=i+1;
        console.log(i)  
     i=i+1;
     console.log(i)}
})



