# jQuery Vectron #

jQuery plugin to load external SVG files into Raphael JS through declarative markup.

[Vectron Website](http://roomandboard.github.com/vectron/)

## Code Example

```html
<div class="svg" data-svg="path_to_file.svg">
```

```javascript
$(document).ready(function(){
	$('.svg').vectron();
});
```

## Scale SVG

```javascript
$(document).ready(function(){
	$('.svg').vectron({ scale: 1.25 });
});
```

### Dependencies: ###

- http://raphaeljs.com/
- https://github.com/DmitryBaranovskiy/elemental
- https://github.com/DmitryBaranovskiy/rappar