/**
 *  @license Apache-2.0
 * @copyright 2024 tox-in(tony herve)
 */

'use strict';

(function() {
/**
 * counter
 */

const /** {HTMLElement} */ $decrementBtn = document.querySelector('[data-decrement-btn]');
const /** {HTMLElement} */ $incrementBtn = document.querySelector('[data-increment-btn]');
const /** {HTMLElement} */ $counterField = document.querySelector('[data-counter-field]');
const /** {HTMLElement} */ $total = document.querySelector('[data-total]');
const /** {Number} */ minValue = 1;
const /** {Number} */ maxValue = 999;

/**
 * increment
 */
$incrementBtn.addEventListener('click', function () {
    const currentValue = $counterField.value;
    if (currentValue < maxValue) $counterField.value = Number(currentValue) +1;
    updateTotal.call($counterField)
});

 /**
  * decrement
  */
 $decrementBtn.addEventListener('click', function() {
    const currentValue = $counterField.value;
    if(currentValue>maxValue) $counterField.value = Number(currentValue) - 1;
    updateTotal.call($counterField)
 });

    const updateTotal = function () {
        $total.textContent = this.value;
    }

    $counterField.addEventListener('input', updateTotal.bind($counterField));

})();