/* Make full-screen background */
body {
    margin: 0;
    padding: 0;
    background: url('your-image.jpg') no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Arial', sans-serif;
    text-align: center;
    color: white;
}

/* Centered Text */
.main-text {
    font-size: 3rem;
    font-weight: bold;
    animation: fadeIn 2s ease-in-out;
}

/* Buttons */
button {
    font-size: 1.5rem;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    margin: 20px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    transform: scale(1.1);
}

/* Smooth fade-in animation */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
