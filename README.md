# o-responsive [![Build Status](https://travis-ci.org/Pearson-Higher-Ed/o-responsive.svg?branch=master)](https://travis-ci.org/Pearson-Higher-Ed/o-responsive)

Responsive design utilities.

## Silent mode

This component provides CSS utility classes for use in responsive designs in addition to the Sass variables and mixins that can be used directly in a component or product implementation. If your application does not require these classes, you can set `$o-responsive-is-silent` to `true` to prevent generating the CSS. By default, `$o-responsive-is-silent` is set to `false`.

## Visibility

The following utility classes are provided to control element visibility based on the current viewport width.

To show an element:

`o-responsive__xs--visible` <br>
`o-responsive__sm--visible` <br>
`o-responsive__md--visible` <br>
`o-responsive__lg--visible` <br>
`o-responsive__xl--visible`

To hide an element:

`o-responsive__xs--hidden` <br>
`o-responsive__sm--hidden` <br>
`o-responsive__md--hidden` <br>
`o-responsive__lg--hidden` <br>
`o-responsive__xl--hidden`

See the [demo](https://origami.pearsoned.com/registry/components/o-responsive) for example usage.

## Accessibility

### Making content visible to screen readers

In some cases, content needs to be hidden visually but remain visible to assistive technology. Use the `o-responsive__sr-only` class to hide elements so that they are still read by screen readers:

```html
<p class="o-responsive__sr-only">This text is hidden visually but will be read by screen readers.</p>
```

### Hiding content from screen readers

To hide an element from assistive technology, add the [aria-hidden](http://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden) attribute:

```html
<p aria-hidden="true">This text will be visible on the screen
but will not be read by a screen reader.</p>
```

## Advanced usage

### Breakpoints

The breakpoint min and max values are defined as Sass variables using the format `$o-responsive-*-(min|max)`, e.g. `$o-responsive-md-min`. There are no min and max values for the smallest (`xs`) and largest (`xl`) breakpoints, respectively. The following breakpoints are defined:

```
xs:           width < 480px
sm: >= 480px  width < 768px
md: >= 768px  width < 1024px
lg: >= 1024px width < 1280px
xl: >= 1280px width
```

#### o-responsive-breakpoint($min-bp to $max-bp)

The `o-responsive-breakpoint` mixin generates media queries for the standard breakpoints. Breakpoints are inclusive; for example, `sm to lg` means that the styles will be applied at the small, medium, and large breakpoints. If the lower or upper bound is ommitted, styles will be applied to the specified breakpoint and any smaller or larger breakpoints, respectively.

```sass
// Sass
.foo {
	color: red;

	@include o-responsive-breakpoint(sm) {
		color: blue;
	}

	@include o-responsive-breakpoint(md to lg) {
		color: green;
	}

	@include o-responsive-breakpoint(to xs) {
		color: purple;
	}
}

// CSS
.foo {
	color: red;
}

@media (min-width: 480px) {
	.foo {
		color: blue;
	}
}

@media (min-width: 768px) and (max-width: 1279px) {
	.foo {
		color: green;
	}
}

@media (max-width: 479px) {
	.foo {
		color: purple;
	}
}
```

## License

This software is published by Pearson Education under the [MIT license](LICENSE).

