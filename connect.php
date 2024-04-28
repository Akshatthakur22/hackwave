<?php
// Database connection parameters
$host = "localhost";
$username = "root";
$password = "9090";
$database = "hackwave";

// Connect to MySQL database
$conn = new mysqli($host, $username, $password, $database);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $username = $_POST['username'];
    $emailId = $_POST['emailId'];
    $password = $_POST['password'];

    // Query to insert user data into the database
    $query = "INSERT INTO users (username, email, password) VALUES ('$username', '$emailId', '$password')";
    
    // Execute the query
    if ($conn->query($query) === TRUE) {
        // User registered successfully
        echo "Registration successful!";
        // Redirect to another page or perform further actions
    } else {
        // Error occurred while inserting data
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>