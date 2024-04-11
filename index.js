// // This script is not required to display the page, but it could be used to fetch data from GitHub and populate the stats section

// // Example function to fetch data from GitHub
// function getStats() {
//     // Replace with your own GitHub API request
//     fetch('https://api.github.com/repos/clearlydecoded/html-css-javascript-tutorial')
//       .then(response => response.json())
//       .then(data => {
//         document.getElementById('contributors').textContent = data.contributors_count;
//         document.getElementById('issues').textContent = data.open_issues_count;
//         document.getElementById('stars').textContent = data.stargazers_count;
//         document.getElementById('forks').textContent = data.forks_count;
//       });
//   }
  
//   // Call the function to fetch stats
//   getStats();
  