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

## License

This software is published by Pearson Education under the [MIT license](LICENSE).

