// Optional JavaScript for additional interactivity
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.nav-button');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });
});