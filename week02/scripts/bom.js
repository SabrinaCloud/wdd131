// Get references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add click event listener for the Add Chapter button

button.addEventListener('click', function(){
    // Check if the input is not blank
    if (input.value.trim() !== ''){
        
        // Create a list item
        const li = document.createElement('li');
        li.textContent = input.value.trim();
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        
        // Add click event listener to the delete button
        deleteButton.addEventListener('click', function(){
            list.removeChild(li);
            input.focus();
        });
        
        // Append delete button to the list item
        li.append(deleteButton);
        
        // Append list item to the list
        list.append(li);
        
        // Clear the input field
        input.value='';
        
        // Return focus to the input field
        input.focus();
        } else{
        
        // Provide a message or return focus to the input field
        input.focus();
    }
});
