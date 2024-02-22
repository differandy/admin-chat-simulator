const createFooter = () => {
	return `
  <footer class="footer">
    <a href="https://github.com/differandy" class="footer__link" target="_blank">
      <svg class="link__github">
        <use xlink:href="../../public/images/svg/sprite.svg#github"></use>
      </svg>
    </a>
  </footer>
  `;
};

export { createFooter };
