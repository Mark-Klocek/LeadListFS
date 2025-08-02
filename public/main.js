const deleteButton = document.querySelectorAll('.fa-trash')
const editWindowButton = document.querySelectorAll('.fa-pen')
const editButton = document.querySelectorAll('.editButton')

Array.from(deleteButton).forEach((element)=>{
    element.addEventListener('click', deleteBusiness)
})
Array.from(editWindowButton).forEach(element =>{
    element.addEventListener('click',editWindow)
})
Array.from(editButton).forEach(element=>{
    element.addEventListener('click',updateBusiness)
})






async function deleteBusiness(){
    console.log(this.parentNode.parentNode.childNodes[5].innerText)
    const businessNumber = this.parentNode.parentNode.childNodes[5].innerText

    try{
        const response = await fetch('deleteBusiness', {
            method:'delete',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                'itemFromJS': businessNumber
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
        
    }catch(err){
        console.log(err)
    }
}
function editWindow(){
    const editWindows = document.querySelectorAll('.editWindow')
    editWindows.forEach(element => {
        element.style.visibility = 'hidden'
    })
    this.childNodes[2].style.visibility = 'visible'
    
}

async function updateBusiness(){
    const originalNumber = this.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[5].innerText
    const updatedName = this.parentNode.childNodes[1].value
    const updatedNumber = this.parentNode.childNodes[3].value
    const updatedAddress = this.parentNode.childNodes[5].value
    try{
        const response = await fetch('updateBusiness',
            {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'originalNumber' : originalNumber,
                    'updatedName': updatedName,
                    'updatedNumber': updatedNumber,
                    'updatedAddress': updatedAddress
                })
                
            })
        const data = await response.json()
        //console.log(data)
        location.reload()
    }catch(error){
        console.error(error)
    }
}