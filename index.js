// Function to get ordinal suffix for day
function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

// Function to format the current date
function formatCurrentDate() {
    const now = new Date();
    
    // Get date components
    const day = now.getDate();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    
    // Get time components
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Format minutes with leading zero if needed
    const formattedMinutes = minutes.toString().padStart(2, '0');
    
    // Create the formatted date string
    const ordinalSuffix = getOrdinalSuffix(day);
    const formattedDate = `${day}${ordinalSuffix} ${month} ${year} at ${hours}:${formattedMinutes} ${ampm}`;
    
    return formattedDate;
}

// Function to handle button click
function handleDateButtonClick() {
    const dateLabel = document.getElementById('dateLabel');
    const formattedDate = formatCurrentDate();
    
    // Add a nice animation effect
    dateLabel.style.opacity = '0.5';
    
    setTimeout(() => {
        dateLabel.textContent = formattedDate;
        dateLabel.classList.add('updated');
        dateLabel.style.opacity = '1';
    }, 200);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const dateButton = document.getElementById('dateButton');
    const dateLabel = document.getElementById('dateLabel');
    
    // Add click event listener to the button
    dateButton.addEventListener('click', handleDateButtonClick);
    
    // Optional: Add hover effect for the label
    dateLabel.addEventListener('mouseenter', function() {
        if (!this.classList.contains('updated')) {
            this.style.borderColor = '#ff7b00';
        }
    });
    
    dateLabel.addEventListener('mouseleave', function() {
        if (!this.classList.contains('updated')) {
            this.style.borderColor = '#e9ecef';
        }
    });
});
