// DOM Elements
let form = document.getElementById('form')
let listContainer = document.querySelector('.list-container')
let submitBtn = document.querySelector('.submitBtn')
let clearBtn = document.querySelector('.clearBtn')
let inputField = document.querySelector('.input')
let itemsArray = JSON.parse(localStorage.getItem('items') || '[]')

// Appending input text to a list item
function itemAdd (text) {
	let li = document.createElement('li')
	li.className = 'item'
	li.innerHTML = text
	listContainer.appendChild(li)
	listContainer.insertBefore(li, listContainer.childNodes[0])

	// Checkbox to see if item has been completed
	let complete = document.createElement('input')
	complete.setAttribute('type', 'checkbox')
	complete.className = 'complete'
	li.appendChild(complete)
}

itemsArray.forEach(function (text) {
	itemAdd(text.todos)

})


// Allowing the user to press 'Enter' to submit todo item
inputField.addEventListener('focus', function (e) {
	if(e.keyCode === 13) {
		e.preventDefault()
		submitBtn.click()
	}
})

// Submit button may also be triggered
submitBtn.addEventListener('click', function (e) {
	e.preventDefault()
	let inputValue = document.querySelector('.input').value

	if(/^\s+$/.test(inputValue) || inputValue == null || inputValue == '') {
		alert('Empty')
	} else {
		itemsArray.push({todos: inputValue, completed: false})
		itemAdd(inputValue)
	}

	localStorage.setItem('items', JSON.stringify(itemsArray))

	// Clears input field
	form.reset()
})

// Clears list and localstorage
clearBtn.addEventListener('click', function () {
	itemsArray.length = 0
	localStorage.clear()
	location.reload()
})



