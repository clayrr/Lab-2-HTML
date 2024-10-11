/*
2. Create a button with a certain ID in HTML. Every time it’s pressed, add a paragraph element with text “You pressed a button!” to the bottom of the screen.
3. Create a button with another ID in HTML. Every time the button is pressed, the innerText in a h4 element goes up by one.
4. Create a paragraph with text “experiment with color” and three buttons in HTML; each button should change the text color of the paragraph to a different color.
5. Create a text input box in HTML and a button after it. When the button is clicked, your javascript should show text on the page after the input that mirrors whatever the user types in the input.
6. Create another paragraph with text “Experiment with fonts” and a drop-down menu with at least 3 different font selections (look up the semantic element <select>). Choosing an option should change the font of the paragraph.
*/

// Exercise 1
document.getElementById('btn-add-paragraph').addEventListener('click', () => {
	const para = document.createElement('p');
	para.textContent = "you clicked me!";
	document.getElementById('paragraph-container').appendChild(para);
});

// Exercise 2
document.getElementById('btn-increment-heading').addEventListener('click', () => {
	const h4 = document.getElementById('increment-heading');
	h4.innerText = parseInt(h4.innerText) + 1;
});

// Exercise 3
const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(button => {
	button.addEventListener('click', () => {
		document.getElementById('color-paragraph').style.color = button.getAttribute('data-color');
	});
});

// Exercise 4
document.getElementById('btn-mirror-text').addEventListener('click', () => {
	const inputText = document.getElementById('input-text').value;
	document.getElementById('mirrored-text').innerText = inputText;
});

// Exercise 5
document.getElementById('font-select').addEventListener('change', (event) => {
	document.getElementById('font-paragraph').style.fontFamily = event.target.value;
});
