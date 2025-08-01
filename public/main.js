const deleteButton = document.querySelectorAll('.fa-trash')

Array.from(deleteButton).forEach((element)=>{
    element.addEventListener('click', deleteBusiness)
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