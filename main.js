document.addEventListener('DOMContentLoaded', function () {
  const ctaButton = document.querySelector('.cta .btn');

  ctaButton.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Thank you for your interest in Omnifood! We’ll contact you soon.');
  });

  const testimonials = document.querySelectorAll('.testimonial');
  let current = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove('active');
      if (i === index) testimonial.classList.add('active');
    });
  }

  function nextTestimonial() {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }

  setInterval(nextTestimonial, 4000);

  //  Gallery 
  const galleryImages = document.querySelectorAll('.gallery-img');
  let galleryIndex = 0;

  function showGalleryImage(index) {
    galleryImages.forEach((img, i) => {
      img.classList.remove('active');
      img.style.display = 'none';
      if (i === index) {
        img.classList.add('active');
        img.style.display = 'block';
      }
    });
  }

  function nextGalleryImage() {
    galleryIndex = (galleryIndex + 1) % galleryImages.length;
    showGalleryImage(galleryIndex);
  }

  showGalleryImage(galleryIndex);
  setInterval(nextGalleryImage, 5000);
});
