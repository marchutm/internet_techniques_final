
  var originalWidth;
  var originalHeight;
  var originalWidthImage;
  var originalHeightImage;
  var originalFontSize;

  document.getElementById("my-figure2").addEventListener("click", function(){
    var figure = document.getElementById("my-figure2");
    var img = document.getElementById("my-image2");
    var caption = document.getElementById("my-caption2");
    if(!originalWidth){
      originalWidth = figure.style.width;
      originalHeight = figure.style.height;
	  originalWidthImage = img.style.width;
      originalHeightImage = img.style.height;
      originalFontSize = caption.style.fontSize;
    }
    figure.style.width = "100%";
    figure.style.height = "100%";
	img.style.width = "100%";
    img.style.height = "100%";
    caption.style.fontSize = "100%";
  });

  document.getElementById("my-figure2").addEventListener("mouseout", function(){
    var figure = document.getElementById("my-figure2");
	var img = document.getElementById("my-image2");
    var caption = document.getElementById("my-caption2");
    figure.style.width = originalWidth;
    figure.style.height = originalHeight;
	img.style.width = originalWidthImage;
    img.style.height = originalHeightImage;
    caption.style.fontSize = originalFontSize;
  });

