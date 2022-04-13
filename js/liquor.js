// 헤드 영역 //
const header = document.querySelector('.header')
const btn = document.querySelector('.btn')
const width = window.innerWidth;

window.addEventListener("scroll", e=>{
	const width = window.innerWidth;
	const height = window.scrollY
	if(height>=10){
		header.classList.add('on')}
	if(height<10){
			header.classList.remove('on')}
});

btn.addEventListener("click",e=>{
e.preventDefault();
const menu = document.querySelector(".menu")
menu.classList.toggle('on')
header.classList.toggle('btn')
})
// 헤드영역end //