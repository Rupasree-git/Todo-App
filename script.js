const task=document.getElementById("Task")
task.addEventListener('submit',(e)=>{
    e.preventDefault()
    const form = document.querySelector('form');
    const allTask = document.querySelector('#allTask');
    const input = document.querySelector('input');
    const text=input.value.trim();
    
    if(text=="")
        return;
     const parent=document.createElement('div')
     const newtask=document.createElement('span')
     newtask.textContent=text
     newtask.style.fontSize='30px'
     const deletebtn=document.createElement('button')
     deletebtn.textContent=`Delete`
     deletebtn.style.margin='40px'
     const donebtn=document.createElement('button')
     donebtn.textContent=`Done`
     parent.append(newtask,deletebtn,donebtn)
     allTask.append(parent)
     deletebtn.addEventListener('click',()=>{
    parent.remove();
   })
    donebtn.addEventListener('click',()=>{
    newtask.style.textDecoration = 'line-through';
    newtask.style.color = 'grey';
   })
   
   form.reset();
})