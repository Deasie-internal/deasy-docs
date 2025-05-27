// Custom Deasy Labs JavaScript

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Apply custom classes to Mintlify components
  
  // Add animation to page loads
  const contentArea = document.getElementById('content-area');
  if (contentArea) {
    contentArea.classList.add('animate-fadeIn');
  }
  
  // Style code blocks with custom colors
  const codeBlocks = document.querySelectorAll('pre');
  codeBlocks.forEach(block => {
    block.style.fontSize = '0.75rem';
  });
  
  // Apply custom button styles
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    if (button.textContent.includes('Try Deasy')) {
      button.style.backgroundColor = '#4FA892';
      button.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#3E8674';
      });
      button.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#4FA892';
      });
    }
  });
  
  // Apply font sizes to navigation items
  const navItems = document.querySelectorAll('#navbar a, #navbar button');
  navItems.forEach(item => {
    item.style.fontSize = '0.85rem';
  });
  
  // Apply smaller font to sidebar
  const sidebarItems = document.querySelectorAll('#sidebar a');
  sidebarItems.forEach(item => {
    item.style.fontSize = '0.75rem';
  });
  
  // Add smooth transitions to interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .card');
  interactiveElements.forEach(element => {
    element.style.transition = 'all 0.2s ease';
  });
});

// Handle route changes for single-page navigation
if (window.navigation) {
  window.navigation.addEventListener('navigate', function() {
    setTimeout(() => {
      const contentArea = document.getElementById('content-area');
      if (contentArea) {
        contentArea.classList.add('animate-slideIn');
      }
    }, 100);
  });
} 