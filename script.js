// A global variable to store the name of the current recipe.
let currentRecipeName = "My Favorite Chili";

// Part 2: Logical Grouping of Recipe Information
// Function to calculate the total time, demonstrating parameters and a return value.
function calculateTotalTime(prep, cook) {
    // This variable has local scope, only available inside this function.
    const total = prep + cook;
    console.log(`The total time for '${currentRecipeName}' is ${total} minutes.`);

    return total;
}

// Function to handle the calculation and display the result.
function handleTimeCalculation() {
    const prepInput = document.getElementById('prepTime');
    const cookInput = document.getElementById('cookTime');
    const totalTimeSpan = document.getElementById('totalTime');
    
    // Get numeric values from the input fields.
    const prep = parseInt(prepInput.value);
    const cook = parseInt(cookInput.value);

    // Check for valid numbers and perform the calculation.
    if (!isNaN(prep) && !isNaN(cook)) {
        const total = calculateTotalTime(prep, cook);
        totalTimeSpan.textContent = total;
    } else {
        totalTimeSpan.textContent = 'Please enter valid numbers.';
    }
}

// Event listener for the calculation button.
const calculateButton = document.getElementById('calculateTotal');
if (calculateButton) {
    calculateButton.addEventListener('click', handleTimeCalculation);
}

// Part 3: Combining Visuals with Logical Structure
// An array to hold the recipe steps.
const recipeSteps = [
    "Chop the vegetables.",
    "Brown the ground beef and drain the fat.",
    "Add the seasonings and canned goods to the pot.",
    "Let it simmer for 30 minutes.",
    "Serve hot and enjoy!"
];

let currentStepIndex = 0;

// Function to start the recipe animation.
function startRecipe() {
    const instructionBox = document.getElementById('instructionBox');
    const startBtn = document.getElementById('startRecipeBtn');
    const nextBtn = document.getElementById('nextStepBtn');

    if (instructionBox && startBtn && nextBtn) {
        // Add a class to trigger the CSS animation.
        instructionBox.classList.add('active');
        startBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        
        // Display the first step.
        updateInstruction();
    }
}

// Function to update the instruction and progress bar.
function updateInstruction() {
    const instructionNumberSpan = document.querySelector('.instruction-number');
    const instructionTextSpan = document.querySelector('.instruction-text');
    const progressFill = document.querySelector('.progress-fill');
    
    if (currentStepIndex < recipeSteps.length) {
        // Update the text with the new step.
        instructionNumberSpan.textContent = `Step ${currentStepIndex + 1}: `;
        instructionTextSpan.textContent = recipeSteps[currentStepIndex];
        
        // Update the progress bar width based on the current step.
        const progress = (currentStepIndex / (recipeSteps.length - 1)) * 100;
        progressFill.style.width = `${progress}%`;
        
        currentStepIndex++;
    } else {
        // Recipe is complete.
        showRecipeComplete();
    }
}

// Function to show the recipe complete pop-up.
function showRecipeComplete() {
    const instructionBox = document.getElementById('instructionBox');
    const nextBtn = document.getElementById('nextStepBtn');
    const popup = document.getElementById('recipeCompletePopup');

    if (instructionBox && nextBtn && popup) {
        // Hide the instruction box and next button.
        instructionBox.classList.remove('active');
        nextBtn.classList.add('hidden');
        
        // Show the pop-up by adding a CSS class.
        popup.classList.add('show');
    }
}

// Event listeners for the interactive recipe part.
const startRecipeBtn = document.getElementById('startRecipeBtn');
const nextStepBtn = document.getElementById('nextStepBtn');

if (startRecipeBtn) {
    startRecipeBtn.addEventListener('click', startRecipe);
}

if (nextStepBtn) {
    nextStepBtn.addEventListener('click', updateInstruction);
}
