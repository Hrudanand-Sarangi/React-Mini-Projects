# React + Vite

# 🎉 React Mini Projects  

This project contains three small React applications demonstrating the use of **state, props, event handling, and API integration**.  

## 🚀 **Features**
1. ✅ **To-Do List** – Add, delete, and mark tasks as done.  
2. 🎰 **Lottery App** – Click a button to generate a random 3-digit number; if the sum matches a target, you win!  
3. 😂 **Random Joke Generator** – Fetch and display a new joke from an API each time.  

---

## 🛠️ **Installation & Setup**  

1. **Clone the repository:**  
   ```sh
   git clone https://github.com/your-username/react-mini-projects.git
   cd react-mini-projects
   ```

2. **Install dependencies:**  
   ```sh
   npm install
   ```

3. **Start the development server:**  
   ```sh
   npm start
   ```

---

## 📜 **Project Breakdown**

### 1️⃣ **To-Do List**
A simple task manager that lets users **add**, **delete**, and **mark tasks as done**.
- Uses `useState` for state management.
- Dynamic UI updates.

#### **Code Snippet**
```jsx
const [tasks, setTasks] = useState([]);

const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), task, isDone: false }]);
};
```

---

### 2️⃣ **Lottery App**
Click the button to generate a **random 3-digit number**. If the sum of the digits meets a winning condition, you win the lottery!
- Uses `useState` to track numbers.
- Displays a **winning message** when the condition is met.

#### **Code Snippet**
```jsx
const [numbers, setNumbers] = useState([0, 0, 0]);

const generateNumbers = () => {
    let newNums = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10));
    setNumbers(newNums);
};
```

---

### 3️⃣ **Random Joke Generator**
Fetches a new **joke from an API** and displays it.
- Uses **`fetch` API** or `axios` to get jokes.
- Updates state to show a **new joke** on each click.

#### **Code Snippet**
```jsx
const [joke, setJoke] = useState("");

const fetchJoke = async () => {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await response.json();
    setJoke(data.setup + " " + data.punchline);
};
```

---

## 🏗️ **Built With**
- **React.js**  
- **JavaScript (ES6+)**  
- **CSS**  
- **API Integration (Jokes API)**  

---

## 🤝 **Contributing**
Pull requests are welcome! If you have suggestions, feel free to open an issue.  
