# Element.prototype.scrollPercent

This method is used to calculate the percentage an element has been scrolled vertically and horizontally.

**Jump to :**
- [Syntax](#syntax)
- [Return Value](#return-value)
- [Example](#example)
- [Browser Support](#browser-support)

## Syntax

```javascript
Element.scrollPercent();
```

## Return Value

The return value is an object with the properties ``top`` and ``left``, which indicates the percentage an element has been scrolled. The minimum value is 0 and the maximum value is 100. If there's no scrollbar, the return value will be ``NaN``.

```javascript
{
  top : 0,
  left : 0
}
```

The ``top`` property indicates the percentage an element has been scrolled from the top, and the ``left`` property indicates the percentage an element has been scrolled from the left.

## Example

This is an example of a partially scrolled document.

```javascript
var scrolled = document.body.scrollPercent();

scrolled; // {top: 80.27613412228797, left: NaN}
scrolled.top; // 80.27613412228797
scrolled.left; // NaN
```

Since the return value is an object, you can access the top and left properties depending on what you need.

## Browser Support

The table below indicates the lowest browser version ( and onward ) this method is expected to work on.

| **Chrome** | **Firefox** | **Internet Explorer** | **Opera** | **Safari** |
| :--------: | :---------: | :-------------------: | :-------: | :--------: |
| 4+ | 3+ | 8+ | 3+[1] | 4+ |

[1] I estimated this for Opera, because I couldn't find solid information on the first version that supported the properties I used.
