export const codeSnippets = {
  java: `public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
    
    // Variables
    int age = 25;
    String name = "Developer";
    
    // Loop
    for (int i = 0; i < 5; i++) {
      System.out.println("Iteration: " + i);
    }
  }
}`,

  python: `# Python Hello World
print("Hello, World!")

# Variables
age = 25
name = "Developer"

# List
numbers = [1, 2, 3, 4, 5]

# Loop
for i in range(5):
    print(f"Iteration: {i}")

# Function
def greet(name):
    return f"Hello, {name}!"`,

  cpp: `#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    
    // Variables
    int age = 25;
    string name = "Developer";
    
    // Loop
    for (int i = 0; i < 5; i++) {
        cout << "Iteration: " << i << endl;
    }
    
    return 0;
}`,

  c: `#include <stdio.h>
#include <string.h>

int main() {
    printf("Hello, World!\\n");
    
    // Variables
    int age = 25;
    char name[20] = "Developer";
    
    // Loop
    for (int i = 0; i < 5; i++) {
        printf("Iteration: %d\\n", i);
    }
    
    return 0;
}`,

  sql: `-- SQL Hello Query
SELECT 'Hello, World!' AS greeting;

-- Create Table
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT
);

-- Insert Data
INSERT INTO users VALUES (1, 'Developer', 25);

-- Query Data
SELECT * FROM users WHERE age > 20;`,

  javascript: `// Hello World
console.log("Hello, World!");

// Variables
const age = 25;
const name = "Developer";

// Array
const numbers = [1, 2, 3, 4, 5];

// Loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

// Function
function greet(name) {
    return "Hello, " + name;
}`
}
