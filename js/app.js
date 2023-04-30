// Import a header which is define in another HTML File

let navbarVar=document.querySelector(".navbarDiv")
fetch('/html/navbar.html')
.then(res=>res.text())
.then(data=>{
    navbarVar.innerHTML=data
})


// Import the Form Editor in the Browse page
let efvar=document.querySelector(".editorFormDiv")
fetch('/html/editorForm.html')
.then(res=>res.text())
.then(data=>{
    efvar.innerHTML=data
    const parser= new DOMParser()
    const doc=parser.parseFromString(data,'text/html')
    eval(doc.querySelector('script').textContent)
})