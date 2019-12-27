import $ from 'jquery';
import RippleEffect from './Ripple.js';

(function() {

    $(initRipple);

    function initRipple() {
        const elements = [].slice.call(document.querySelectorAll('.ripple'))
        elements.forEach(el => new RippleEffect(el))
    }

})();
