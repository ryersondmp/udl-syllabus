# Foundations of a Course Outline
This resource was developed to help instructors create an effective course outline based on the principles of Universal Design for Learning (UDL).

## Creating annotations
Wrap descriptive text with a button. The `data-tip` attribute should be unique.
```
 <button class="annotation" data-tip="foo">descriptive text</button>
```

The `data-tip` attribute should then reference the tooltip contents at the bottom of the page (where the remaining tooltips are). For example:
```
<div id="foo">
  <h2>Tooltip header</h2>
</div>
```

### Accessibility
Visually hidden text and ARIA attributes are automatically added to annotations. Tooltips are positioned immediately after the annotation. Any interactive content within the tooltips should be keyboard focusable.

## Built with
Created by Toronto Metropolitan University's UDL Working Group. Made with:

- [Bootstrap 5](https://getbootstrap.com/) - the world’s most popular front-end open source toolkit.
- [Tippy.js](https://github.com/atomiks/tippyjs) - Tooltip, popover, dropdown, and menu library.
- [SkipTo](https://github.com/paypal/skipto) - SkipTo is a replacement for your old classic "Skipnav" link.

## License
"[Foundations of a Course Outline](https://ryersondmp.github.io/udl-syllabus)" by [Toronto Metropolitan University](http://torontomu.ca/)'s UDL Working Group is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1).