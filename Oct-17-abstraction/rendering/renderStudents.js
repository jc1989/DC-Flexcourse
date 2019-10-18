
function renderStudents(students) {
    let student = "";

    for (i = 0; i < students.length; i++){
        student += `
        <div class = "text-center mt-5 nametag">
        <h1>${students[i].name}</h1>
        <p>${students[i].isPresent ? "Present" : "Absent"}</p>
        </div>
    `
    }
    return student;
}


function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}