const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]



document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('all').addEventListener('click', () => {
        showCurses(courses);
    });

    document.getElementById('cse').addEventListener('click', () => {
        const complited = courses.filter(course => course.completed === true);
        showCurses(complited);
    });

    document.getElementById('wdd').addEventListener('click', () => {
        const uncomplited = courses.filter(course => course.completed === false);
        showCurses(uncomplited);
    });



});

function showCurses(filtercourses) {
    const result = document.getElementById('result');
    result.innerHTML = " ";

    if (filtercourses === 0) {
        result.innerHTML = `<p>There is not results to show</p>`;
        return;
    }

    filtercourses.forEach(curse => {
        const btn = document.createElement('button');

        if (curse.completed === true) {
            btn.setAttribute('id', `'btn${curse.subject}${curse.number}'`);
            btn.classList.add('style-btn');
            btn.textContent = `✔ ${curse.subject} ${curse.number}`;
            btn.style.backgroundColor = '#640d14';
            btn.addEventListener('click', () => showInfo(curse));
        }
        else {
            btn.setAttribute('id', `'btn${curse.subject}${curse.number}'`);
            btn.classList.add('style-btn');
            btn.textContent = `${curse.subject} ${curse.number}`;
            btn.style.backgroundColor = '#c0c0c0';
            btn.style.color = 'black';
            btn.addEventListener('click', () => showInfo(curse));
        }

        result.appendChild(btn);
    });

}


function showInfo(data) {

    const existingDialog = document.getElementById('myDialog');
    if (existingDialog) {
        existingDialog.remove();
    }

    const dialog = document.createElement('dialog');
    const title = document.createElement('h2');
    const closebtn = document.createElement('button');
    const courseName = document.createElement('h3');
    const credits = document.createElement('p');
    const certificate = document.createElement('p');
    const description = document.createElement('p');
    const technology = document.createElement('p');

    dialog.setAttribute('id', 'myDialog');
    title.setAttribute('id', 'myTitle');
    closebtn.setAttribute('aria-label', 'Cerrar modal');


    title.innerHTML = `${data.subject}${data.number}`;
    closebtn.innerHTML = 'X';
    courseName.textContent = data.title;
    credits.textContent = `Creditos: ${data.credits}`;
    certificate.textContent = `Certificate: ${data.certificate}`;
    description.textContent = `Description: ${data.description}`;
    technology.textContent = `Technology ${data.technology}`;



    dialog.appendChild(title);
    dialog.appendChild(closebtn);
    dialog.appendChild(courseName);
    dialog.appendChild(credits);
    dialog.appendChild(certificate);
    dialog.appendChild(description);
    dialog.appendChild(technology);


    document.body.appendChild(dialog);
    dialog.showModal();
    closebtn.addEventListener('click', () => dialog.close());
}

