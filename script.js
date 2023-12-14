
document.addEventListener('DOMContentLoaded', function () {
  var contactForm = document.getElementById('contactForm');
  var thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    thankYouModal.show();

  });
});
