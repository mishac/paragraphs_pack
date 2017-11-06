# paragraphs_pack
Default Paragraph types for Drupal 8.  Forked from Bootstrap Paragraphs (https://www.drupal.org/project/bootstrap_paragraphs), with bootstrap specific code removed, and replaced with jQuery UI where necessary.

### Currently defined paragraph types:

* Text
* Image
* Row - will display its children as equal width columns using flexbox
* Column - displays children vertically, most usefully as a child of a Row paragraph
* Block - embed a drupal block
* Accordion + Accordion Section - display paragraphs as a jQuery UI Accordion
* Tabs + Tab section - display paragraphs as jQuery UI Tabs

### TBD:
* Carousel - need to decide whether to keep this and choose a specific carousel plugin, or remove it.
* Webform + Contant - Bootstrap_paragraphs has these, so it shouldn't be difficult to port those over.
