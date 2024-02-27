const showDialog = (url = false) => {
	const $dialog = document.createElement('dialog');
  $dialog.classList.add('sda_update');
  $dialog.innerHTML = `
    <p class="sda_update-title">This demo uses an older syntax and is not up-to-date</p>
    <p>The Scroll-Linked Animations Specification and its proposed syntax have undergone a major rewrite since creating this demo. The spec also got renamed to Scroll-Driven Animations. This demo uses an older version of the syntax and has not been updated to reflect these changes.</p>
    ${url ? `<p>👉 For an updated version of this demo,<br>check out <a href="${url}" target="_top">${url}</a>.</p>` : `<p>To learn more about the new syntax,<br>visit <a href="https://scroll-driven-animations.style/" target="_top">https://scroll-driven-animations.style/</a>.</p>`}
    <form method="dialog"><button>close</button></form>
    <style>dialog.sda_update:modal {
		    all: revert;
        max-width: 90vw; max-height: 90vh; overflow-y: auto;
        background: white; color: black;
        font-size: 1.2rem; line-height: 1.1; text-align: center; font-weight: 400;
        display: flex; flex-direction: column; gap: 2rem;
        padding: 4rem 6rem 3rem;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    dialog.sda_update * { all: revert; margin: 0 auto; padding: 0; max-width: 60ch; }
    dialog.sda_update .sda_update-title { font-family: serif; font-weight: 700; font-size: 1.4rem; }
    dialog.sda_update::backdrop { background: rgb(0 0 0 / 0.6); }
    </style>
  `;
  document.body.append($dialog);
  $dialog.showModal();
};

export { showDialog };