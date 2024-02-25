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

	sendMsgButton.addEventListener('click', () => {
		let chatTextMsg = input.value;

		if (chatTextMsg) {
			chatViewList.insertAdjacentHTML('beforeend', createLiItem(chatTextMsg));
		} else {
			return;
		}

		clearInputArea();
	});

	input.addEventListener('keypress', e => {
		let key = e.key;

		if (key === 'Enter' && input.value) {
			chatViewList.insertAdjacentHTML('beforeend', createLiItem(input.value));
			clearInputArea();
		} else {
			return;
		}
	});
});
