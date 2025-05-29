

export function setTitle(course) {

    function setTitle() {
        document.querySelector("#courseName").textContent = course.name;
        document.querySelector("#courseCode").textContent = course.code;
    }
    setTitle();
}

export function renderSections(sections) {
    function renderSections() {
        const html = sections.map(
            (section) => `<tr>
    <td>${section.sectionNumber}</td>
    <td>${section.enrolled}</td>
    <td>${section.instructor}</td></tr>`
        );
        document.querySelector("#sections").innerHTML = html.join("");
    }
    renderSections();
}
