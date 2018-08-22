# Attract Hover

Creates an 'attract' effect, when the mouse is near an element and within bounds.

<img src="https://github.com/bymayo/jquery-attract-hover/raw/master/example.gif">

### Requirements

This plugin currently requires jQuery 2.x+, but we'd recommend using jQuery 3.x+.

### Install

You can install via `npm`:

`npm install attract-hover`

Or, manually by copying the `attractHover.js` from `/dist/` and placing it inside your project folders.

### Initialise

To initialise the plugin, use the code below in your JS file.

```javascript
$('.js-attract-hover').attractHover();
```

Then add the selector to the element you want to have the attract effect to.

```html
<a href="/" class="js-attract-hover">
   Button
</a>
```

## Options

You can overwrite the plugin options e.g. `$('.js-attract-hover').attractHover({ proximity: 10 });`. The options for the plugin can be found below:

<table>
	<tr>
		<td><strong>Name</strong></td>
		<td><strong>Type</strong></td>
		<td><strong>Default Value</strong></td>
		<td><strong>Description</strong></td>
	</tr>
   <tr>
		<td>proximity</td>
		<td>integer</td>
		<td>30</td>
		<td>Defines the area around the element that starts the interaction.</td>
	</tr>
   <tr>
		<td>magnetism</td>
		<td>integer</td>
		<td>3</td>
		<td>Defines how far the element can move based on the mouse position and element size.</td>
	</tr>
   <tr>
		<td>attractClass</td>
		<td>string</td>
		<td>attract-hover</td>
		<td>Class wrapped around your attracted element that gets added dynamically.</td>
	</tr>
   <tr>
		<td>attractEasingClass</td>
		<td>string</td>
		<td>attract-hover-easing</td>
		<td>Class that moves your attracted element that gets added dynamically.</td>
	</tr>
   <tr>
		<td>attractAttractedClass</td>
		<td>string</td>
		<td>attract-hover-attracted</td>
		<td>Class that is added when the element is attracted.</td>
	</tr>
</table>

## CSS / Easing

Although theres no need to add any CSS / easing to your elements as the attract hover adds CSS itself dynamically. We recommend adding some form of transition and easing to make the attract effect seem more elastic.

This is best added to the `.attract-hover-easing` in your own CSS (Unless you've changed the `attractEasingClass` option on the plugin.)

```
.attract-hover-easing {
   transition: all 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940);
}
```

## Roadmap

- Vanilla version
- More debugging in browsers and devices
