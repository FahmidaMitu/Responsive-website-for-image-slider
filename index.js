var photos = ['img_3.png', 'image_2.jpg', 'image_1.jpg'];
var imgTag = document.querySelector('#slide');
var count = 0;
function previous() {
  count++;
  if (count >= photos.length) {
    count = 0;
    imgTag.src = photos[count];
  } else imgTag.src = photos[count];
}

function next() {
  count--;
  if (count < 0) {
    count = photos.length - 1;
    imgTag.src = photos[count];
  } else imgTag.src = photos[count];
}


