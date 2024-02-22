import { createChatMessage } from './chatMessage';
import { createChatView } from './chatView';

const createChatWindow = () => {
	return `
    <div class="chat-window">
      ${createChatView()}
      ${createChatMessage()}
    </div>
  `;
};

export { createChatWindow };
