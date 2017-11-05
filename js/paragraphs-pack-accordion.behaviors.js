/**
 * @file
 * JavaScript behaviors for accordion.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Initialize accordion.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.ppAccordion = {
    attach: function (context) {
      $('.paragraph--type--pp-accordion', context).once('ppAccordion').accordion();
    }
  };
})(jQuery, Drupal);
