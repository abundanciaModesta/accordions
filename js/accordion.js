let accords = document.querySelectorAll('.accord')
if (accords.length>0){
    
    accords.forEach(item => {
        let options = item.querySelectorAll('.accord-item')
        options.forEach(option => {
            option.addEventListener('click', ()=> {
                option.classList.contains('active')?option.classList.remove('active'):option.classList.add('active')
                if(!event.target.this){
                    option.classList.remove('active')
                }
            })
        })
})
}