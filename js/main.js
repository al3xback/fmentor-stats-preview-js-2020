const cardEl = document.querySelector('.card');

/* Nullish coalescing operator (??) */
const dummyMarkText = 'insights';
const markText = dummyMarkText ?? '';

const cardTitleSpanEl = cardEl.querySelector('.card__title mark');
cardTitleSpanEl.textContent = markText;

/* Optional chaining operator (?.) */
const statusAmounts = {
	companyAmount: '10K+',
	templateAmount: '314',
	queryAmount: '12M+',
};
const companyAmount = statusAmounts?.companyAmount;
console.log(companyAmount);
