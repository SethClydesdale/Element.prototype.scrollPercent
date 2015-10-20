if (!Element.prototype.scrollPercent) {
  Element.prototype.scrollPercent = function() {
    'use strict';
    var node = this,
        scroll = [node.scrollTop, node.scrollLeft];
    
    if (this.tagName == 'BODY') {
      node = document.documentElement;
      scroll = [document.body.scrollTop + document.documentElement.scrollTop, document.body.scrollLeft + document.documentElement.scrollLeft];
    }
    
    return {
      top : scroll[0] / (node.scrollHeight - node.clientHeight) * 100,
      left : scroll[1] / (node.scrollWidth - node.clientWidth) * 100,
    }
  };
}
