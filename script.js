document.addEventListener("DOMContentLoaded", function () {
  const text = "Data Science Student      ";
  const typedTextSpan = document.querySelector(".typed-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typedTextSpan.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  typedTextSpan.textContent = "";
  type();
});

