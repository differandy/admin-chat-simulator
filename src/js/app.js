import { createHeader } from './components/header';
import { createMain } from './components/main';
import { createFooter } from './components/footer';
import { createLiItem } from './components/chatViewList';

import '../scss/style.scss';

const renderPage = () => {
	return `
  ${createHeader()}
  ${createMain()}
  ${createFooter()}
  `;
};

document.addEventListener('DOMContentLoaded', () => {
	document.body.insertAdjacentHTML('afterbegin', renderPage());

	const input = document.querySelector('input');
	const sendMsgButton = document.querySelector('.send-button');
	const chatViewList = document.querySelector('.chat-view__list');

	const clearInputArea = () => {
		input.value = '';
	};

	const divideString = input => {
		let res = '';

		if (input.length > 45) {
			res = `${input.substring(0, 46)}\n${input.substring(46, input.length)}`;
		} else {
			res = input;
		}

		return res;
	};

	sendMsgButton.addEventListener('click', () => {
		let chatTextMsg = input.value;

		if (chatTextMsg) {
			chatViewList.insertAdjacentHTML(
				'beforeend',
				createLiItem(divideString(chatTextMsg))
			);
		} else {
			return;
		}

		clearInputArea();
	});

	input.addEventListener('keypress', e => {
		let key = e.key;

		if (key === 'Enter' && input.value) {
			chatViewList.insertAdjacentHTML(
				'beforeend',
				createLiItem(divideString(input.value))
			);
			clearInputArea();
		} else {
			return;
		}
	});
});
