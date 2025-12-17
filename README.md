# Leap Year Checker

A simple web-based Leap Year Checker built using HTML, CSS, and JavaScript.  
This project allows users to enter a year and instantly determine whether it is a leap year.

---

## 📌 Features

- User-friendly interface
- Instant result without page reload
- Input validation for invalid or empty values
- Responsive design
- Pure HTML, CSS, and JavaScript (no external libraries)

---

## 🛠️ Technologies Used

- **HTML5** – Structure of the application  
- **CSS3** – Styling and layout  
- **JavaScript (ES6)** – Leap year logic and DOM manipulation  

---

## 📂 Project Structure
leap-year-checker/
│
├── index.html
├── style.css
├── script.js
└── README.md


---

## ⚙️ How It Works

A year is considered a **leap year** if:

- It is divisible by 4  
- But not divisible by 100  
- Unless it is also divisible by 400  

### Formula Used:
```js
const year = Number(prompt("Enter a year to check leap or not"))

if(year%4==0 && year%100==0){
    if(year%400==0){
        console.log(year + " is a Leap year")
    }else{
        console.log(year+" is not a leap year")
    }
}else if(year%4==0){
    console.log(year + " is a leap year")
}else console.log(year +" is not a leap year")

