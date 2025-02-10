body {
    font-family: Arial, sans-serif;
    text-align: center;
    background: url('background.jpg') no-repeat center center/cover;
    color: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1 {
    font-size: 3rem;
    margin-bottom: 20px;
}

p {
    font-size: 1.5rem;
}

.buttons button {
    padding: 15px 30px;
    margin: 10px;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
}

button:first-child {
    background-color: green;
    color: white;
}

button:last-child {
    background-color: red;
    color: white;
}

.hidden {
    display: none;
    font-size: 2rem;
    color: pink;
    margin-top: 20px;
}

.fade-in {
    animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

