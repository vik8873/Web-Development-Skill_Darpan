function showRoutine() {
    let day = document.getElementById("day").value;
    let routine;

    switch (day) {
        case "Monday":
            routine = "Workout in the morning, Study JavaScript, Attend team meeting.";
            break;
        case "Tuesday":
            routine = "Read a book, Work on a project, Cook a new recipe.";
            break;
        case "Wednesday":
            routine = "Go for a run, Practice coding, Watch a documentary.";
            break;
        case "Thursday":
            routine = "Yoga session, Write a blog, Call a friend.";
            break;
        case "Friday":
            routine = "Complete assignments, Movie night, Plan for the weekend.";
            break;
        case "Saturday":
            routine = "Clean the house, Go shopping, Relax with family.";
            break;
        case "Sunday":
            routine = "Go for a walk, Prepare for the upcoming week, Watch a show.";
            break;
        default:
            routine = "Please select a valid day.";
    }

    document.getElementById("routine").innerText = routine;
}
