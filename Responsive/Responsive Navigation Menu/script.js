// Toggle menu on hamburger icon click
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('show');
    document.querySelectorAll('.line').forEach(function (line) {
      line.classList.toggle('active');
    });
  });
  