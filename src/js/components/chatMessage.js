const createSendMessageButton = () => {
	return `
    <button class="send-button">
      <svg class="send">
        <use xlink:href="../../public/images/svg/sprite.svg#send"></use>
      </svg>
    </button>
  `;
};

const createChatMessage = () => {
	return `
    <div class="chat-message">
    <input type="text" placeholder="Отправить в чат">
    ${createSendMessageButton()}
    </div>
  `;
};

export { createChatMessage };
