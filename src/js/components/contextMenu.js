const createContextMenu = () => {
	return `
    <nav class="context-menu">
      <ul class="context-menu__list">
        <li class="context-menu__item">
          <a href="#" class="context-menu__link">Edit message</a>        
        </li>
        <li class="context-menu__item">
          <a href="#" class="context-menu__link">Delete message</a>        
        </li>
        <li class="context-menu__item">
          <a href="#" class="context-menu__link">Mute</a>        
        </li>
      </ul>
    </nav>
  `;
};
