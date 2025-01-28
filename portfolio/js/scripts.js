document.addEventListener('DOMContentLoaded', function() {
    const projectList = document.getElementById('project-list');

    const projects = [
        { title: 'Proje 1', description: 'Proje 1 açıklaması', image: 'img/proje1.jpg' },
        { title: 'Proje 2', description: 'Proje 2 açıklaması', image: 'img/proje2.jpg' },
        // Daha fazla proje ekleyebilirsiniz
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = project.title;

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(projectImage);

        projectList.appendChild(projectDiv);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mesajınız gönderildi!');
        contactForm.reset();
    });
});