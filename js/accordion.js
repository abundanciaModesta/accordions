// let accords = document.querySelectorAll('.accord')
// if (accords.length>0){
//     accords.forEach(item => {
//         let options = item.querySelectorAll('.accord-item')
//         options.forEach(option => {
//             let title = option.querySelector('.accord-title')
//             let body = option.querySelector('.accord-body')
//             option.addEventListener('click', ()=> {
//                 title.classList.contains('accord-active')?title.classList.remove('accord-active'):title.classList.add('accord-active')
//                 body.classList.contains('active')?body.classList.remove('active'):body.classList.add('active')
//             })
//         })
// })
// }

let accords = document.querySelectorAll('.accord')
if(accords.length>0){
    accords.forEach(()=>{
        let panelItem = document.querySelectorAll('.accord-title'),
        bodyItem = document.querySelectorAll('.accord-body');
        let activePanel;
        panelItem.forEach(function(item, i, panelItem) {
            item.addEventListener('click', function(e) {
                this.classList.add('accord-active');
                this.nextElementSibling.classList.add('active');
                if (activePanel) {
                    activePanel.classList.remove('accord-active');
                    activePanel.nextElementSibling.classList.remove('active');
                }
                activePanel = (activePanel === this) ? 0 : this;
            });
        });
    })
}

