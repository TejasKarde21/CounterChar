# CounterChar

It begins by adding an event listener to the "DOMContentLoaded" event. This event is triggered when the HTML document has been fully loaded and parsed.
Inside the event listener function:
It retrieves references to three HTML elements using their respective IDs:
textArea: Represents a <textarea> element with the ID "textArea." This element is where the user can input text.
charCount: Represents an HTML element with the ID "charCount." This element will display the total character count.
remainingCharCount: Represents another HTML element with the ID "remainingCharCount." This element will display the remaining character count.
It adds an "input" event listener to the textArea element. The "input" event is triggered whenever the user
interacts with the <textarea>, such as by typing or deleting text.
Inside the "input" event listener function:
It retrieves the current value of the textArea element and stores it in the text variable.
It calculates the character count by finding the length of the text string and stores it in the charCountValue variable.
It calculates the remaining characters by subtracting the charCountValue from the maximum limit of 50 
characters and stores it in the remainingChars variable.
It checks if the charCountValue (the character count) exceeds 50:
If the character count is greater than 50, it truncates the text inside the textArea by using the 
slice() method to keep only the first 50 characters. It also sets the charCount element's text content 
to '50' to indicate that the maximum character limit has been reached and sets the remainingCharCount element's text content to '0'.
If the character count is 50 characters or less, it updates the charCount element's text content
to display the actual character count (charCountValue) and the remainingCharCount element's text content to display the remaining characters (remainingChars).
