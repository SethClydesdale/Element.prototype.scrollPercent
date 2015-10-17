if (!Element.prototype.scrollPercent) {
  Element.prototype.scrollPercent = function() {
    'use strict';
    var node = this.tagName == 'BODY' ? document.documentElement : this;
    
    return {
      top : this.scrollTop / (node.scrollHeight - node.clientHeight) * 100,
      left : this.scrollLeft / (node.scrollWidth - node.clientWidth) * 100,
    }
  };
}
