document.addEventListener('DOMContentLoaded', function() {
    const alumniData = JSON.parse(localStorage.getItem('alumni')) || [];
    const studentsSection = document.querySelector('.students');

    alumniData.forEach(function(data) {
        const newMilestone = createMilestone(data.name, data.quote, data.photo, data.year);
        studentsSection.appendChild(newMilestone);
    });

    // Form submit event listener
    document.getElementById('addAlumniForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const name = formData.get('name');
        const quote = formData.get('quote');
        const year = formData.get('year');
        const photoFile = formData.get('photo');

        // Convert image to Base64
        const reader = new FileReader();
        reader.readAsDataURL(photoFile);
        reader.onload = function() {
            const photoBase64 = reader.result;

            // Create new alumni object with Base64 image
            const newAlumni = {
                name: name,
                quote: quote,
                year: year,
                photo: photoBase64
            };

            // Add new alumni to localStorage
            alumniData.push(newAlumni);
            localStorage.setItem('alumni', JSON.stringify(alumniData));

            // Create and append new card
            const newMilestone = createMilestone(name, quote, newAlumni.photo, year);
            studentsSection.appendChild(newMilestone);

            document.getElementById('addAlumniForm').reset(); // Reset the form
        };
    });

    // Function to create a new milestone (card)
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
