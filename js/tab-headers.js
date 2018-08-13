function openCity(cityName, element, color) {
  // Hide all elements
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Remove the background color of all tablinks/button
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = '';
  }

  // Show the specific tab content
  document.getElementById(cityName).style.display = 'block';

  // Add specific color to the button used to open the tab content 
  element.style.backgroundColor = color;
}

// Get element with defaultOpen and click on it
document.getElementById('defaultOpen').click();