
export function populateSections(sections) { 


function setSectionSelection() {
    const sectionSelect = document.querySelector("#sectionNumber");
    sections.forEach((section) => {
        const option = document.createElement("option");
        option.value = section.sectionNumber;
        option.textContent = `${section.sectionNumber}`;
        sectionSelect.appendChild(option);
    });
    }

    setSectionSelection();

}