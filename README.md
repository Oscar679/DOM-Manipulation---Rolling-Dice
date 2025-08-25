# 🎲⏰ OOP Dice & Clock Applications

This project is a small **Object-Oriented Programming (OOP)** exercise built with vanilla JavaScript, HTML, and CSS.  
It demonstrates **modular, reusable design** by splitting functionality into separate classes and modules.

---

##  Features

### 🎲 Dice Application
- Add, remove, and roll dice dynamically.
- Displays the **sum of all dice values** in real time.
- Plays a **sound effect** when adding, removing, or rolling dice.
- Drag the dice application window anywhere on the screen.

### ⏰ Clock Application (not completely finished)
- A digital clock displaying hours, minutes, and seconds.
- Built dynamically through DOM manipulation.
- Supports drag-and-drop movement like the Dice App.

### 🖱️ Window Handling
- **Drag & Drop** windows with [`DragHandler.js`](src/js/DragHandler.js).
- Automatic **z-index ordering** with [`ZIndexHandler.js`](src/js/ZIndexHandler.js), so the active window always comes to the front.

---

## ​ Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Oscar679/DOM-Manipulation---Rolling-Dice.git
   cd DOM-Manipulation---Rolling-Dice

2. Open index.html in your browser.

3. Use the menu:
    Click the dice icon to open the Dice App.

    Click the clock icon to open the Clock App.

## Technical Notes

- Written in **ES5-style JavaScript OOP** using constructor functions and prototypes.  
- DOM is created dynamically via `createElement` helper (in `DiceApp.js`).  
- **Dice logic** is encapsulated in `Dice.js`, while UI and state management are handled in `DiceApp.js`.  
- **Clock logic** is encapsulated in `ClockApp.js`.  

### Window Behavior
- `DragHandler.js` manages mouse dragging.  
- `ZIndexHandler.js` ensures the active window always stays on top.  

Includes both **source code** and a **minified build** (`output.js`).  

---

## Learning Goals

This project was created as part of an OOP assignment.  
It focuses on:

- Practicing **object-oriented design** in JavaScript (without ES6 classes).  
- Encapsulation of logic in separate modules.  
- DOM manipulation without external libraries.  
- Understanding interaction patterns (drag & drop, z-index, event-driven UI).  



https://github.com/user-attachments/assets/b2405a7d-ac19-43d4-8757-ad6fbc785914

