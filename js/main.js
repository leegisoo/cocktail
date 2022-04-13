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

// 컨텐츠 영역 //
const leftarrow = document.querySelector('.leftarrow')
const his = document.querySelector('.history');

his.addEventListener("mouseover",e=>{
	leftarrow.classList.add('on')
})

his.addEventListener("mouseout",e=>{
	leftarrow.classList.remove('on')
})

const rightarrow = document.querySelector('.rightarrow')
const learn = document.querySelector('.learn');

learn.addEventListener("mouseover",e=>{
	rightarrow.classList.add('on')
})

learn.addEventListener("mouseout",e=>{
	rightarrow.classList.remove('on')
})

const left2arrow = document.querySelector('.left2arrow')
const glass = document.querySelector('.glass');

glass.addEventListener("mouseover",e=>{
	left2arrow.classList.add('on')
})

glass.addEventListener("mouseout",e=>{
	left2arrow.classList.remove('on')
})

const right2arrow = document.querySelector('.right2arrow')
const liquor = document.querySelector('.liquor');

liquor.addEventListener("mouseover",e=>{
	right2arrow.classList.add('on')
})

liquor.addEventListener("mouseout",e=>{
	right2arrow.classList.remove('on')
})
// 컨텐츠 영역 end //
