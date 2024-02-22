import { createChatWindow } from './chatWindow';

const createMain = () => {
	return `
  <main class="main">
  ${createChatWindow()}
  </main>
  `;
};

export { createMain };
