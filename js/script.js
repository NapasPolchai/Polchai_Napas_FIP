const button = document.getElementById('animate-button');

// Function to toggle animation class
function toggleAnimation() {
    button.classList.toggle('pulse');
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }


