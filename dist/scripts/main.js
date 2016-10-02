'use strict';

function onBlur() {
	document.body.className = 'blurred';
};
function onFocus() {
	document.body.className = 'focused';
};

window.onfocus = onFocus;
window.onblur = onBlur;
//# sourceMappingURL=main.js.map
