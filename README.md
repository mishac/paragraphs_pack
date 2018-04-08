# paragraphs_pack
Default Paragraph types for Drupal 8.  Forked from Bootstrap Paragraphs (https://www.drupal.org/project/bootstrap_paragraphs), with bootstrap specific code
removed, and replaced with jQuery UI where necessary.

### Currently defined paragraph types:

* Text
* Image
* Row - will display its children as equal width columns using flexbox
* Column - displays children vertically, most usefully as a child of a Row paragraph
* Block - embed a drupal block
* Accordion + Accordion Section - display paragraphs as a jQuery UI Accordion
* Tabs + Tab section - display paragraphs as jQuery UI Tabs

### Provided by submodules
* pp_webform: a paragraph type that embeds a drupal webform

### TBD:
* Carousel - need to decide whether to keep this and choose a specific carousel plugin, or remove it.
* Contact - Bootstrap_paragraphs has this.
