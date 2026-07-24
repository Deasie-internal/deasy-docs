// Unstructured by Collibra — custom docs JavaScript

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  // DesignOS primary button (button.solidHover / solidPressed tokens)
  const buttons = document.querySelectorAll('button, a[href*="collibra.com"]');
  buttons.forEach(button => {
    if (button.textContent.includes('Try Deasy')) {
      button.style.backgroundColor = '#B7500C';
      button.style.borderRadius = '6px';
      button.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#A3480A';
      });
      button.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#B7500C';
      });
    }
  });
});