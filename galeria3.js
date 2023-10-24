
  var originalWidth;
  var originalHeight;
  var originalWidthImage;
  var originalHeightImage;
  var originalFontSize;

  document.getElementById("my-figure3").addEventListener("click", function(){
    var figure = document.getElementById("my-figure3");
    var img = document.getElementById("my-image3");
    var caption = document.getElementById("my-caption3");
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

  document.getElementById("my-figure3").addEventListener("mouseout", function(){
    var figure = document.getElementById("my-figure3");
	var img = document.getElementById("my-image3");
    var caption = document.getElementById("my-caption3");
    figure.style.width = originalWidth;
    figure.style.height = originalHeight;
	img.style.width = originalWidthImage;
    img.style.height = originalHeightImage;
    caption.style.fontSize = originalFontSize;
  });

