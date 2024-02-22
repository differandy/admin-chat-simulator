import { users } from '../services/users';
const admin = users[0].username;

const createChatViewList = () => {
	return `
    <ul class="chat-view__list"></ul>
  `;
};

const createLiItem = text => {
	return `
    <li class="view__list-item"><span class="username">${admin}</span>: ${text}</li>
  `;
};

export { createChatViewList, createLiItem };
