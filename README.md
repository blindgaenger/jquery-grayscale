# jQuery Grayscale

A jQuery plugin to grayscale any image in your browser.

It've used a technique found at [ajaxblender - Convert Images to Grayscale](http://www.ajaxblender.com/howto-convert-image-to-grayscale-using-javascript.html), which draws the image to a hidden Canvas element and returns the grayscaled image as a data-url.

*IMPORTANT:* For security reasons some browsers only allow local images to be loaded to the canvas, otherwise you'll get strange `Security error code: 1000` in the console.

## Usage

Ok, this is easy:

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>jQuery Grayscale Example</title>
        <script src="http://code.jquery.com/jquery-1.4.4.min.js"></script>
        <script src="/javascripts/jquery.grayscale.js"></script>
      </head>
      <body>
        <img src="some_colorful_image.jpg" class="gray" />
        <script>
          $(document).ready(function() {
            $('img.gray').grayscale();
          });
        </script>
      </body>
    </html>

So you'll need to include jQuery and Grayscale:

    <script src="http://code.jquery.com/jquery-1.4.4.min.js"></script>
    <script src="/javascripts/jquery.grayscale.js"></script>

Add some images you want to grayscale to your page:

    <img src="colorful_image.jpg" alt="…" class="gray" />

Now select the images and call `grayscale`:
  
    $('img.gray').grayscale();

This replaces `src` with a data-url of the grayscaled version.

    <img class="hover" alt="Colorful Unicorn" 
        src="data:image/png;base64,…"
        original-src="/images/unicorn.jpg" />
        
The original image URL will be preserved at `original-src`.

## Examples

*Note:* Because of the security warnings for loading files to a canvas, the examples use a local server to run correctly. The server is a simple [Rack App](http://rack.rubyforge.org/), so you need Ruby installed.

Run the examples server at port 3000:

    rake examples

This will server all example files:

    http://localhost:3000

Have fun!

## Author

Copyright 2010 by [blindgaenger](http://blindgaenger.net)
