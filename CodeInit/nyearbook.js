document.addEventListener('DOMContentLoaded', function() {
    const alumniData = JSON.parse(localStorage.getItem('alumni')) || [];
    const studentsSection = document.querySelector('.students');

    alumniData.forEach(function(data) {
        const newMilestone = createMilestone(data.name, data.quote, data.photo, data.year);
        studentsSection.appendChild(newMilestone);
    });
    function createMilestone(name, quote, photo, year) {
        const newMilestone = document.createElement('div');
        newMilestone.classList.add('milestone');

        const img = document.createElement('img');
        img.src = photo;
        img.alt = name + ' - Alumni';

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const pQuote = document.createElement('p');
        pQuote.classList.add('quote');
        pQuote.textContent = quote;

        const pYear = document.createElement('p');
        pYear.classList.add('date');
        pYear.textContent = 'Year: ' + year;

        newMilestone.appendChild(img);
        newMilestone.appendChild(h2);
        newMilestone.appendChild(pQuote);
        newMilestone.appendChild(pYear);

        return newMilestone;
    }
});