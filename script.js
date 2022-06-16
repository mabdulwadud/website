/*
 * Author: Ma'Sum Abdul Wadud
 * Project Name: Sean Moore Photography
 * Project Description: This project is my implementation of the final project for 
 * IMM 130 - Design Fundamentals for the Web. It is a static website for a mock client.
 * This project utilizes HTML, CSS, and JavaScript.

Project Date: December 2020
Last Updated: 2020-12-08
*/


const lightbox = document.createElement('div');
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)
const images = document.querySelectorAll('.gallery > img')
images.forEach(image => {
	image.addEventListener('click', e => {
		lightbox.classList.add('active')
		const img = document.createElement('img')
		img.src = image.src
		while (lightbox.firstChild) {
			lightbox.removeChild(lightbox.firstChild)
		}
		lightbox.appendChild(img)
	})
})

lightbox.addEventListener('click', e => {
	if (e.target !== e.currentTarget) return
	lightbox.classList.remove('active')
})
