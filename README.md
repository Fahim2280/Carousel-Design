# Carousel Design README

This project demonstrates a responsive carousel design, allowing for visually appealing book or card display with functionality to navigate between items. The following sections outline the structure, features, and how to set up the project.

---

## Features
- **Responsive Design**: Adjusts to different screen sizes and maintains proper alignment.
- **Navigation Buttons**: Left and right arrows for cycling through items.
- **Pagination Dots**: Indicates the currently active item and allows direct navigation.
- **Centered Content**: Ensures that the carousel is centered both horizontally and vertically.
- **Smooth Transitions**: Animates transitions between carousel items.
- **Card Design**: Each card includes an image, title, and description, with text ellipsis for overflow.

---

## File Structure
```
project-folder/
|-- index.html                 # Main HTML file
|-- Controller/
|   |-- my-script.js          # JavaScript file for functionality
|-- Model/
|   |-- book-description.json # JSON file containing book data
|-- View/
|   |-- my-styles.css         # CSS file for styling the carousel
|-- Image/                    # Folder for images
|   |-- book1.jpg
|   |-- book2.jpg
|   |-- book3.jpg
|   |-- book4.jpg
|   |-- book5.jpg
|   |-- book6.jpg
|   |-- book7.jpg
```

---

## Setup and Usage
1. **Clone the Repository**:
   ```bash
   https://github.com/Fahim2280/Carousel-Design.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd project-folder
   ```

3. **Open the `index.html` File in Your Browser**:
   - Double-click the file or use a live server in your code editor.

4. **Customize**:
   - Replace images in the `Image/` folder.
   - Modify titles and descriptions in the `book-description.json` file as needed.

---

## Customization
### CSS Variables
The design uses customizable CSS properties for easy adjustments:
```css
:root {
  --card-width: 300px;
  --card-gap: 15px;
  --arrow-size: 40px;
  --pagination-color: #ccc;
  --pagination-active-color: #000;
}
```
You can edit these variables in `my-styles.css` to match your requirements.

---

## Key Functions in `my-script.js`
- **Navigation**:
  - Moves the carousel left or right using the `prev` and `next` buttons.
- **Pagination**:
  - Updates the active dot and jumps to the respective carousel item.

---

## Notes
- Ensure that the `Image/` folder contains proper images for the carousel.
- The carousel is fully responsive but may require further tweaks for extreme resolutions.

---

## License
This project is open-source and available under the MIT License.

---

## Contact
For any queries or suggestions, feel free to reach out via the project's repository.
