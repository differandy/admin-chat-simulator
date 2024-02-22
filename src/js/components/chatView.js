import { createChatViewList } from './chatViewList';

const createChatView = () => {
	return `
    <div class="chat-view">
      ${createChatViewList()}
    </div>
  `;
};

export { createChatView };
