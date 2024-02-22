const createHeader = () => {
	return `
  <header class="header">
    <a href="../../../index.html">
    <svg class="header__logo">
        <use xlink:href="../../public/images/svg/sprite.svg#acs"></use>
      </svg></a>
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__list-item">Как играть</li>
        <li class="navigation__list-item">Контакты</li>
      </ul>
    </nav>
  </header>
  `;
};

export { createHeader };
