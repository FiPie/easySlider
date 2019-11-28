var images = ["01.png", "02.png", "03.png"];
var current = 0;
var imageWidth, imageHeight, nextImageWidth, nextImageHeight, imagesWidth, imagesHeight, timeout, imageRatio, nextImg;

$(function() {
  $('.buttons').css({
    'margin': 'auto',
    'text-align': 'center'
  });

  $('#i1').width('49.5vw');
  imageWidth = $('#i1').width();
  $('#i2').width('49.5vw');
  nextImageWidth = $('#i2').width();

  imageHeight = $('#i1').height();
  imageRatio = imageHeight / imageWidth;
  $('#i1').height(imageHeight);
  $('#i2').height(imageHeight);

  $('.container').css({
    'width': imageWidth,
    'height': imageHeight
  });

  $('.images').css({
    'width': imageWidth + nextImageWidth + '1vw',
    'height': imageHeight
  });

  $('#stop').prop('disabled', true);
  $('#play').prop('disabled', false);
  $('#play').on('click', play);

  $(window).on('resize', function() {
    $('#i1').width('49.5vw');
    imageWidth = $('#i1').width();
    $('#i2').width('49.5vw');
    nextImageWidth = $('#i2').width();
    imageHeight = imageRatio * imageWidth;
    $('#i1').height(imageHeight);
    $('#i2').height(imageHeight);
    $('.container').css({
      'width': imageWidth,
      'height': imageHeight
    });
    $('.images').css({
      'width': imageWidth + nextImageWidth + '1vw',
      'height': imageHeight
    });
  });

});

function play() {
  $('.images').stop(true, true);
  $('#play').prop('disabled', true);
  $('#stop').prop('disabled', false);
  $('#play').off();
  $('#stop').off();
  $('#stop').on('click', stop);
  $('.images').animate({
      'margin-left': -imageWidth
    },
    1200, 'swing', next_image
  );
  console.log('play() current=' + current + ' next=' + nextImg);
}

function stop() {
  $('.images').stop(true, true);
  $('#stop').off();
  $('#stop').prop('disabled', true);
  $('#play').prop('disabled', false);

  $('#play').off();
  $('#play').on('click', play);
  clearTimeout(timeout);
  console.log('stop() current=' + current + ' next=' + nextImg);
}

function next_image() {
  current = (current + 1 + images.length) % images.length;
  $('#i1').attr('src', 'images/' + images[current]);
  $('.images').css('margin-left', '0px');
  nextImg = (current + 1 + images.length) % images.length;
  $('#i2').attr('src', 'images/' + images[nextImg]);

  $('#i1').height(imageHeight);
  $('#i2').height(imageHeight);
  timeout = setTimeout('play()', 2000);
  console.log('next_image current=' + current + ' next=' + nextImg);
}

function next() {
  current = (current + 1 + images.length) % images.length;
  $('#i1').attr('src', 'images/' + images[current]);
  $('.images').css('margin-left', '0px');
  nextImg = (current + 1 + images.length) % images.length;
  $('#i2').attr('src', 'images/' + images[nextImg]);

  $('#i1').height(imageHeight);
  $('#i2').height(imageHeight);
  console.log('next() current=' + current + ' next=' + nextImg);
}

function prev() {
  current = (current - 1 + images.length) % images.length;
  $('#i1').attr('src', 'images/' + images[current]);
  $('.images').css('margin-left', '0px');
  nextImg = (current + 1 + images.length) % images.length;
  $('#i2').attr('src', 'images/' + images[nextImg]);

  $('#i1').height(imageHeight);
  $('#i2').height(imageHeight);
  console.log('prev() current=' + current + ' next=' + nextImg);
}