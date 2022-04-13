// 헤드 영역 //
const header = document.querySelector('.header')
const btn = document.querySelector('.btn')
const width = window.innerWidth;

window.addEventListener("scroll", e=>{
	const width = window.innerWidth;
	const height = window.scrollY
	if(height>=10){
		header.classList.add('on')}
	if(height<10	){
			header.classList.remove('on')}
});

btn.addEventListener("click",e=>{
e.preventDefault();
const menu = document.querySelector(".menu")
menu.classList.toggle('on')
header.classList.toggle('btn')
})
// 헤드영역end //

// 컨텐츠영역 //
const hi1 = document.querySelector(".hi1")
const hi2 = document.querySelector(".hi2")
const hi3 = document.querySelector(".hi3")
const hi4 = document.querySelector(".hi4")
const text1 = document.querySelector('.text1')
const text2 = document.querySelector('.text2')
const text3 = document.querySelector('.text3')
const text4 = document.querySelector('.text4')
const historymenu = document.querySelectorAll(".history li")
const con = document.querySelector('.historycon')
const conimage = document.querySelector('.conimage')

hi1.addEventListener("click",e=>{
	e.preventDefault();
	hi1.style.backgroundColor = "rgba(119, 119, 119, 0.6)"
	hi2.style.backgroundColor = "rgba(187, 187, 187, 0.1)"
	hi3.style.backgroundColor = "rgba(187, 187, 187, 0.1)"
	hi4.style.backgroundColor = "rgba(187, 187, 187, 0.1)"
	text1.style.display = "block"
	text2.style.display = "none"
	text3.style.display = "none"
	text4.style.display = "none"
	con.style.backgroundImage = "url(/img/con1.jpg)"
	conimage.style.backgroundImage = "url(/img/con1.jpg)"
})

hi2.addEventListener("click",e=>{
	e.preventDefault();
	hi1.style.backgroundColor = "rgba(187, 187, 187, 0.1)"
	hi2.style.backgroundColor = "rgba(119, 119, 119, 0.6)"
	hi3.style.backgroundColor = "rgba(187, 187, 187, 0.1)"
	hi4.style.backgroundColor = "rgba(187, 187, 187, 0.1)"
	text1.style.display = "none"
	text2.style.display = "block"
	text3.style.display = "none"
	text4.style.display = "none"
	con.style.backgroundImage = "url(/img/con2.jpg)"
	conimage.style.backgroundImage = "url(/img/con2.jpg)"
})

hi3.addEventListener("click",e=>{
	e.preventDefault();
	hi1.style.backgroundColor = "rgba(187, 187, 187, 0.1)"
	hi2.style.backgroundColor = "rgba(187, 187, 187, 0.1)"
	hi3.style.backgroundColor = "rgba(119, 119, 119, 0.6)"
	hi4.style.backgroundColor = "rgba(187, 187, 187, 0.1)"
	text1.style.display = "none"
	text2.style.display = "none"
	text3.style.display = "block"
	text4.style.display = "none"
	con.style.backgroundImage = "url(/img/con3.jpg)"
	conimage.style.backgroundImage = "url(/img/con3.jpg)"
})

hi4.addEventListener("click",e=>{
	e.preventDefault();
	hi1.style.backgroundColor = "rgba(187, 187, 187, 0.1)"
	hi2.style.backgroundColor = "rgba(187, 187, 187, 0.1)"
	hi3.style.backgroundColor = "rgba(187, 187, 187, 0.1)"
	hi4.style.backgroundColor = "rgba(119, 119, 119, 0.6)"
	text1.style.display = "none"
	text2.style.display = "none"
	text3.style.display = "none"
	text4.style.display = "block"
	con.style.backgroundImage = "url(/img/con4.jpg)"
	conimage.style.backgroundImage = "url(/img/con4.jpg)"
})
// 컨텐츠영역 end//