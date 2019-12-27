import './Ripple.scss';

/**
 * Ripple effect for common components
 * @param [element] native dom element
 */
export default class RippleEffect {

    constructor(element) {
        const TRANSITION_END = 'transitionend';
        const clickEv = this.detectClickEvent();

        this.element = element;
        this.rippleElement = this.getElement();

        this.element.addEventListener(clickEv, () => {
            // remove animation on click
            this.rippleElement.classList.remove('md-ripple-animate');
            // Set ripple size and position
            this.calcSizeAndPos();
            // start to animate
            this.rippleElement
                .classList.add('md-ripple-animate');
        });

        this.rippleElement.addEventListener(TRANSITION_END, () => {
            this.rippleElement
                .classList.remove('md-ripple-animate');
            // avoid weird effect when ripple is not active
            this.rippleElement.style.width = 0;
            this.rippleElement.style.height = 0;
        });
    }

    /**
     * Returns the elements used to generate the effect
     * If not exists, it is created by appending a new
     * dom element
     */
    getElement() {
        let rippleElement = this.element.querySelector('.md-ripple');

        if (rippleElement === null) {
            // Create ripple
            rippleElement = document.createElement('span');
            rippleElement.className = 'md-ripple';
            // Add ripple to element
            this.element.appendChild(rippleElement);
        }
        return rippleElement;
    }

    /**
     * Determines the better size for the ripple element
     * based on the element attached and calculates the
     * position be fully centered
     */
    calcSizeAndPos() {
        let size = Math.max(this.element.offsetWidth, this.element.offsetHeight);
        this.rippleElement.style.width = size + 'px';
        this.rippleElement.style.height = size + 'px';
        // autocenter (requires css)
        this.rippleElement.style.marginTop = -(size / 2) + 'px';
        this.rippleElement.style.marginLeft = -(size / 2) + 'px';
    }

    detectClickEvent() {
        let isIOS = ((/iphone|ipad/gi).test(navigator.appVersion));
        return isIOS ? 'touchstart' : 'mousedown';
    }
}