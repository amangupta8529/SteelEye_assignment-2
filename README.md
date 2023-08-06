## highlightHTMLContent Function
This repository contains a JavaScript function called highlightHTMLContent, which is designed to highlight specific content within an HTML string based on provided positions in a plain text.

### Usage
The highlightHTMLContent function takes three inputs:
- htmlContent (string): The HTML content that needs to be highlighted.
- plainText (string): The plain text extracted from htmlContent.
- plainTextPositions (array): An array of objects representing the start and end positions of words in plainText.

### Testing
- Make sure to have Jest installed as a dev dependency in your project:
  npm install jest --save-dev
- highlightHTMLContent function. Run the test using the following command: npm test 
- The test should pass successfully, indicating that the function is working as expected. Feel free to add more test cases to ensure the robustness of the function.
