const calciContainer = document.querySelector('.calci-container');
const calciScreen = document.querySelector('.calci-screen');

let i = 9;
let calciScreenValue = calciScreen.value;
while (i >= 0) {
	let numberBtns = document.createElement('button');
	numberBtns.innerText = i;
	let createClsAttr = document.createAttribute('class');
	createClsAttr.value = 'number-btns ' + i;
	numberBtns.setAttributeNode(createClsAttr);
	calciContainer.appendChild(numberBtns);

	i--;
}

let operatorsArr = [ '+', '-', '*', '%', '.', '/', '&', '|', '^', '(', ')', '~', '>>', '<<', '!' ],
	j = 0;

while (j < operatorsArr.length) {
	operatorsBtn = document.createElement('button');
	operatorsBtn.innerText = operatorsArr[j];
	calciContainer.appendChild(operatorsBtn);

	j++;
}
const buttonEls = document.querySelectorAll('button');

buttonEls.forEach((btnEl) => {
	btnEl.addEventListener('click', () => {
		btnEl.style.color = 'blue';
		calciScreen.value += btnEl.innerText;
	});
});


let allClearBtn = document.createElement('button');
allClearBtn.innerHTML = 'AC';
allClearBtn.addEventListener('click', () => {
	calciScreen.value = '';
});
calciContainer.appendChild(allClearBtn);


let clearBtn = document.createElement('button');
clearBtn.innerHTML = '<i class="fas fa-backspace">';
clearBtn.addEventListener('click', () => {
	if (calciScreen.value != null && calciScreen.value.length > 0) {
		calciScreen.value = calciScreen.value.substring(0, calciScreen.value.length - 1);
	}
});
calciContainer.appendChild(clearBtn);

let resbtn = document.createElement('button');
resbtn.innerText = ' = ';

resbtn.addEventListener('click', () => {
	result = eval(calciScreen.value);
	calciScreen.value = result;
});

calciContainer.appendChild(resbtn);
