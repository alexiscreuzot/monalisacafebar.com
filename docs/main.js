
ScrollReveal().reveal(".show-once", { reset: false });
ScrollReveal().reveal(".scale-up", {duration: 2000,scale: 0.9 });

ScrollReveal().reveal('.leave1', { distance: '200px', origin: 'left', delay: 500, duration: 1000, reset: false });
ScrollReveal().reveal('.leave2', { distance: '200px', origin: 'right', delay: 800, duration: 1100, reset: false });
ScrollReveal().reveal('.leave3', { distance: '200px', origin: 'left', delay: 1000, duration: 800, reset: false });
ScrollReveal().reveal('.leave4', { distance: '200px', origin: 'left', delay: 500, duration: 1000, reset: false });
ScrollReveal().reveal('.leave5', { distance: '200px', origin: 'right', delay: 800, duration: 1100, reset: false });


jQuery(document).ready(function () {
  jQuery("#nanogallery2").nanogallery2({
    itemsBaseURL: './assets/images/',
    viewerGallery: 'none',
    thumbnailHeight:  300,
    thumbnailWidth:   300,
    thumbnailGutterWidth : 16,
    thumbnailGutterHeight : 16,
    viewerToolbar: {
      standard:  'minimizeButton, label, fullscreenButton',
      minimized: 'minimizeButton, label, fullscreenButton' 
    },
    viewerTools:    {
      topLeft:   'label',
      topRight:  'closeButton' 
    },  
    viewerTheme : { background: '#F00' },
  });
});

