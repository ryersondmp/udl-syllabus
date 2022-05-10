
// Tippy config.
tippy('button', {
  content(reference) {
    const id = reference.getAttribute('data-tip');
    const template = document.getElementById(id);
    return template.innerHTML;
  },
  allowHTML: true,
  appendTo: 'parent',
  interactive: true,
  placement: 'auto-start',
  theme: 'annotation',
  trigger: "mouseenter click focusin",
  arrow: true,
});

// SkipTo config.
var SkipToConfig = {
  'settings': {
    'skipTo': {
      landmarks: 'main',
      headings: 'h1, h2',
      colorTheme: 'default',
      buttonLabel: 'Skip to content',
      focusBorderColor: '#5bc2f4',
      positionLeft: '5%',
      fontSize: '1rem',
      attachElement: '#top'
    }
  }
};

// Escape key to close all tooltips.
document.onkeydown = (evt) => {
  evt = evt || window.event;
  let isEscape = false;
  if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } else {
    isEscape = (evt.keyCode === 27);
  }
  if (isEscape) {
    tippy.hideAll();
  }
};

// Annotation styling.
const tooltips = document.querySelectorAll("[data-tip]");
const tooltipHTML = `
<i class="far fa-sticky-note" aria-hidden="true"></i>
<span class="visually-hidden">Annotation:</span>`;
tooltips.forEach(($el) => {
  $el.insertAdjacentHTML('afterbegin', tooltipHTML);
  $el.setAttribute('type', 'button');

  // Wrap inline. Tooltip gets appended to this element.
  const wrapper = document.createElement('div');
  wrapper.style.display = 'inline-block';
  $el.parentNode.insertBefore(wrapper, $el);
  wrapper.appendChild($el);
});