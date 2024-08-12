# web-drawing-app
# Paint Application

This is a simple web-based paint application built using JavaScript, jQuery, HTML5 Canvas, and CSS. The application allows users to draw, erase, and save their drawings. Users can change the brush color, adjust the brush size, and even save their artwork to the browser's local storage.

## Features

- **Drawing:** Users can draw on the canvas by clicking and dragging the mouse.
- **Erasing:** The application provides an eraser tool to remove parts of the drawing.
- **Color Selection:** Users can choose their preferred color using the color picker.
- **Brush Size:** The size of the brush can be adjusted using a slider.
- **Save Drawing:** Users can save their current drawing to local storage.
- **Reset Canvas:** The canvas can be cleared with a reset button.
- **Load Saved Drawing:** The application automatically loads the saved drawing from local storage when the page is refreshed or reopened.

## How It Works

### Main Components

1. **Canvas Setup:** 
   - The `canvas` element is used to draw, and the `ctx` object is the 2D drawing context.
   - The `container` is the parent element that holds the canvas.

2. **Mouse Events:**
   - **mousedown:** Starts the drawing process by capturing the initial mouse position and setting the `paint` variable to `true`.
   - **mousemove:** Draws on the canvas while the mouse is moving and the `paint` variable is `true`.
   - **mouseup:** Stops the drawing process by setting the `paint` variable to `false`.
   - **mouseleave:** Stops the drawing process when the mouse leaves the container.

3. **Drawing Parameters:**
   - The brush's appearance is controlled by properties like `lineWidth`, `lineJoin`, and `lineCap`.

4. **Saving and Loading:**
   - The drawing is saved in local storage as a base64-encoded image using `canvas.toDataURL()`.
   - When the page loads, the saved image is retrieved from local storage and drawn onto the canvas.

5. **Color and Brush Size:**
   - The color picker (`#paintColor`) allows users to change the brush color.
   - The slider (`#slider`) lets users adjust the brush size dynamically.

### Functions

- **reset:** Clears the canvas and resets the drawing mode to paint.
- **save:** Saves the current canvas image to local storage.
- **erase:** Toggles between the paint and erase modes.

## Usage

1. **Drawing:** Click and drag on the canvas to draw. Release the mouse button to stop drawing.
2. **Erasing:** Click the erase button to switch to erase mode, and click again to switch back to paint mode.
3. **Changing Color:** Use the color picker to select a different brush color.
4. **Adjusting Brush Size:** Use the slider to change the brush size.
5. **Saving:** Click the save button to store your drawing in the browser's local storage.
6. **Resetting Canvas:** Click the reset button to clear the canvas.

## Compatibility

This application relies on HTML5 and local storage, so it is compatible with modern web browsers that support these features. Older browsers might not fully support the application.

## Dependencies

- [jQuery](https://jquery.com/): JavaScript library used for DOM manipulation.
- [jQuery UI](https://jqueryui.com/): Used for the slider functionality to adjust brush size.

## How to Run

1. Download or clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Start drawing on the canvas!

## License

This project is open-source and available under the MIT License. You are free to use, modify, and distribute this application as per the terms of the license.
