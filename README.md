# Element.prototype.scrollPercent

This method is used to calculate the percentage an element has been scrolled vertically and horizontally.

### Syntax

```javascript
Element.scrollPercent();
```

### Return Value

The return value is an object with the properties top and left. The minimum value is 0 and the maximum value is 100. If there's no scrollbar, the return value will be ``NaN``.

```javascript
{
  top : 0,
  left : 0
}
```

### Example

Let's say for example, we've scrolled the document near to the end.

```javascript
var scrolled = document.body.scrollPercent();

scrolled; // {top: 80.27613412228797, left: NaN}
scrolled.top; // 80.27613412228797
scrolled.left; // NaN
```

**Note :** Some browsers ( Such as firefox ) need to use ``document.documentElement`` to calculate the percentage the document has been scrolled. For other elements, the calculation should be fine across all browsers.
