// Add a scroll event listener to change the navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.5)'; // Change background color on scroll
    } else {
        navbar.style.background = 'transparent'; // Revert to transparent background
    }
});


// Function to simulate typing animation
function typeText(element, text, speed) {
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    return new Promise(resolve => {
        type(); // Start typing animation
        setTimeout(resolve, text.length * speed); // Resolve the promise when typing is done
    });
}

// Initialize the typing animation for the subheading, name, and bio
const subheadingElement = document.querySelector('.subheading');
const subheadingText = "Hello, It's me ";
const nameElement = document.querySelector('.name');
const nameText = "Dheeraj";
const bioElement = document.querySelector('.bio');
const bioText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto quisquam, corporis nobis ipsa iure fugit temporibus id esse? Suscipit voluptatum ea eos voluptate!";

async function startTyping() {
    await typeText(subheadingElement, subheadingText, 50);
    await typeText(nameElement, nameText, 100);
    await typeText(bioElement, bioText, 10);
}

startTyping();
