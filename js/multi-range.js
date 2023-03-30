 // Get all the slider elements
 var sliders = document.querySelectorAll(".slider");

 // Loop through each slider and initialize the values and event listeners
 sliders.forEach(function (slider) {
     var inputLeft = slider.querySelector(".input-left");
     var inputRight = slider.querySelector(".input-right");
     var thumbLeft = slider.querySelector(".thumb.left");
     var thumbRight = slider.querySelector(".thumb.right");
     var range = slider.querySelector(".range_bg");

     var thumbLeft_value = slider.querySelector(".thumb.left .value");
     var thumbRight_value = slider.querySelector(".thumb.right .value");

     function setLeftValue() {
         var min = parseInt(inputLeft.min);
         var max = parseInt(inputLeft.max);

         inputLeft.value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - 1);

         var percent = ((inputLeft.value - min) / (max - min)) * 100;

         thumbLeft.style.left = percent + "%";
         range.style.left = percent + "%";
         thumbLeft_value.innerHTML = parseInt(percent);
     }
     setLeftValue();

     function setRightValue() {
         var min = parseInt(inputRight.min);
         var max = parseInt(inputRight.max);

         inputRight.value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + 1);

         var percent = ((inputRight.value - min) / (max - min)) * 100;

         thumbRight.style.right = (100 - percent) + "%";
         range.style.right = (100 - percent) + "%";

         thumbRight_value.innerHTML = parseInt(percent);
     }
     setRightValue();

     inputLeft.addEventListener("input", setLeftValue);
     inputRight.addEventListener("input", setRightValue);

     inputLeft.addEventListener("mouseover", function () {
         thumbLeft.classList.add("hover");
     });
     inputLeft.addEventListener("mouseout", function () {
         thumbLeft.classList.remove("hover");
     });
     inputLeft.addEventListener("mousedown", function () {
         thumbLeft.classList.add("active");
     });
     inputLeft.addEventListener("mouseup", function () {
         thumbLeft.classList.remove("active");
     });

     inputRight.addEventListener("mouseover", function () {
         thumbRight.classList.add("hover");
     });
     inputRight.addEventListener("mouseout", function () {
         thumbRight.classList.remove("hover");
     });
     inputRight.addEventListener("mousedown", function () {
         thumbRight.classList.add("active");
     });
     inputRight.addEventListener("mouseup", function () {
         thumbRight.classList.remove("active");
     });
 });