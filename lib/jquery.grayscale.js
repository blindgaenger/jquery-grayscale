// http://www.ajaxblender.com/howto-convert-image-to-grayscale-using-javascript.html
(function( $ ){

  function grayscaleImageIE(image) {
    image.get(0).style.filter = 'progid:DXImageTransform.Microsoft.BasicImage(grayScale=1)';
  }

  function grayscaleImage(image) {
    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');

    var imgObj = image.get(0);
    var imgW = image.width();
    var imgH = image.height();
    canvas.width = imgW;
    canvas.height = imgH;

    canvasContext.drawImage(imgObj, 0, 0, imgW, imgH);
    var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);

    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
            imgPixels.data[i] = avg; 
            imgPixels.data[i + 1] = avg; 
            imgPixels.data[i + 2] = avg;
        }
    }

    canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);

    image.attr('original-src', image.attr('src'));
    imgObj.src = canvas.toDataURL();
  }

  $.fn.grayscale = function() {  

    return this.each(function() {
      try {
        var image = $(this);
        if ($.browser.msie) {
          grayscaleImageIE(image);
        } else {
          grayscaleImage(image);
        }
      } catch (e) {
        if (console != undefined) {
          console.log("could not grayscale image '" + image.attr('src') + "'", e);
        }
      }
    });

  };
})( jQuery );