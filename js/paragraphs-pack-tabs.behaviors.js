/**
 * @file
 * JavaScript behaviors for tabs.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Initialize Tabs.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.ppTabs = {
    attach: function (context) {
      $('.paragraph--type--pp-tabs', context).once('ppTabs').tabs();
    }
  };
})(jQuery, Drupal);
