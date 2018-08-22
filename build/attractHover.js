/*
	*************************
	Attract Hover
	*************************

	Jason Mayo (ByMayo)
	http://github.com/bymayo
	http://bymayo.co.uk
	http://twitter.com/madebymayo

*/

$.attractHover = function(selector, options) {

   //
   // Settings
   //

   var pluginSettings = $.extend({
         proximity: 30,
         magnetism: 3,
         attractClass: 'attract-hover',
         attractEasingClass: 'attract-hover-easing',
         attractAttractedClass: 'attract-hover-attracted'
      },
      options
   );

   //
   // Build
   //

   $(selector).each(
      function(index) {

         var
            mouseX,
            mouseY,
            distance;

         $(this).wrap('<div class="' + pluginSettings.attractClass + '"><div class="' + pluginSettings.attractEasingClass + '"></div></div>');

         var element = $(this).closest('.' + pluginSettings.attractClass);

         // Credit - https://codepen.io/znak/pen/LmHir
         function calculateDistance(
            element,
            mouseX,
            mouseY
         ) {
            return Math.floor(
               Math.sqrt(
                  Math.pow(mouseX - (element.offset().left + (element.width() / 2)), 2) +
                  Math.pow(mouseY - (element.offset().top + (element.height() / 2)), 2)
               )
            ) - Math.round(element.width() / 2);
         }

         $(document)
            .mousemove(
               function(e) {

                  mouseX = e.pageX;
                  mouseY = e.pageY;
                  distance = calculateDistance(element, mouseX, mouseY);

                  var relativeX = (mouseX - (element.offset().left + (element.width() / 2)));
                  var relativeY = (mouseY - (element.offset().top + (element.height() / 2)));

                  if (distance < pluginSettings.proximity) {
                     element
                        .addClass(pluginSettings.attractAttractedClass)
                        .children('.' + pluginSettings.attractEasingClass)
                        .css('transform', 'translate(' + (relativeX / pluginSettings.magnetism) + 'px, ' + (relativeY / pluginSettings.magnetism) + 'px)');
                  } else {
                     element
                        .removeClass(pluginSettings.attractAttractedClass)
                        .children('.' + pluginSettings.attractEasingClass)
                        .css('transform', 'translate(0)');
                  }
               }
            );

      }
   );

};
