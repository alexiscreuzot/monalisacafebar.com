$(document).ready(function() {
    // Show toast after 0.5 seconds
    setTimeout(function() {
      $('#review-toast').fadeIn();
    }, 500);
  
    // Toast click handler for the text
    $('#review-toast .toast-text').click(function() {
      $('#review-popup').removeClass('hidden');
    });
  
    // Close toast
    function dismissReviewToast() {
      const $toast = $('#review-toast');
      $toast.addClass('toast-dismiss');
      setTimeout(function() {
        $toast.hide().removeClass('toast-dismiss');
      }, 300);
    }
  
    $('#review-toast .close-button').click(function() {
      dismissReviewToast();
    });
  
    // Close popup (both for close button and footer button)
    function closeReviewPopup() {
      $('#review-popup').addClass('hidden');
    }
  
    // Handle close button click
    $('#review-popup .close-button').click(function() {
      closeReviewPopup();
    });
  
    // Handle review button click (opens link in new tab and closes popup)
    $('#review-popup .review-button').click(function() {
      window.open('https://bit.ly/monalisa_review', '_blank');
      closeReviewPopup();
    });
  
    // Close popup when clicking outside
    $('#review-popup').click(function(e) {
      if ($(e.target).is('#review-popup')) {
        closeReviewPopup();
      }
    });
  
    // Optional: Close on escape key
    $(document).keydown(function(e) {
      if (e.key === 'Escape') {
        closeReviewPopup();
      }
    });
  
    // Make entire toast clickable
    $('#review-toast').click(function(e) {
      if (!$(e.target).closest('.close-button').length) {
        $('#review-popup').removeClass('hidden');
        dismissReviewToast();
      }
    });
  });
  
  // Global functions for inline onclick handlers
  function showReviewPopup() {
    $('#review-popup').removeClass('hidden');
  }
  
  function closeReviewPopup() {
    $('#review-popup').addClass('hidden');
  }
  
  function dismissReviewToast() {
    const $toast = $('#review-toast');
    $toast.addClass('toast-dismiss');
    setTimeout(function() {
      $toast.hide().removeClass('toast-dismiss');
    }, 300);
  }