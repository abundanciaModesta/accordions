let accords = document.querySelectorAll('.accord')
console.log(accords)
let count = 1
if (accords.length>0){
    
    accords.forEach(item => {
        let options = item.querySelectorAll('.accord-item')
        options.forEach(option => {
            option.addEventListener('click', ()=> {
                option.classList.contains('active')?option.classList.remove('active'):option.classList.add('active')
            })
        })
        return console.log(options)
})
}