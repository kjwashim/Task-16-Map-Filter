const students = [
    {
        name: "Md Washim Akram",
        marks: "38%",
        class: "3rd",
        address: "India"
    },
    {
        name: "Salman",
        marks: "48%",
        class: "2rd",
        address: "India"
    },
    {
        name: "Salman Ahmed",
        marks: "38%",
        class: "3rd",
        address: "India"
    },
    {
        name: "Riya Sharma",
        marks: "85%",
        class: "10th",
        address: "Delhi"
    },
    {
        name: "Rohan Patel",
        marks: "70%",
        class: "12th",
        address: "Mumbai"
    },
    {
        name: "Priya Singh",
        marks: "95%",
        class: "8th",
        address: "Bangalore"
    },
    {
        name: "Ankit Gupta",
        marks: "60%",
        class: "5th",
        address: "Kolkata"
    },
    {
        name: "Neha Verma",
        marks: "80%",
        class: "11th",
        address: "Chennai"
    }
];

const container = document.getElementById("studentContainer");
const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

function displayStudents(data){

    container.innerHTML = data.map(student => `
        <div class="card">
            <p><strong>Student Name:</strong> ${student.name}</p>
            <p><strong>Marks:</strong> ${student.marks}</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>Address:</strong> ${student.address}</p>
        </div>
    `).join("");

}

// Display all students initially
displayStudents(students);

// Search only after button click
searchBtn.addEventListener("click", function(){

    const value = search.value.toLowerCase();

    const filtered = students.filter(student =>
        student.name.toLowerCase().includes(value)
    );

    displayStudents(filtered);

});