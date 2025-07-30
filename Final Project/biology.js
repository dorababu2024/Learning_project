
// Accordion functionality for opening and closing panels
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Add more topics dynamically (up to 100 topics and 1000 subtopics)
function addMoreTopics() {
    const topicContainer = document.getElementById('topicContainer');
    for (let i = 4; i <= 100; i++) {
        const button = document.createElement('button');
        button.className = 'accordion';
        button.textContent = `Topic ${i}: Topic Name ${i}`;
        
        const panel = document.createElement('div');
        panel.className = 'panel';

        const ul = document.createElement('ul');
        for (let j = 1; j <= 10; j++) {
            const li = document.createElement('li');
            li.textContent = `Subtopic ${i}.${j}: Subtopic Name ${j}`;
            ul.appendChild(li);
        }

        panel.appendChild(ul);
        topicContainer.appendChild(button);
        topicContainer.appendChild(panel);
    }
}

// Initialize adding 100 topics
addMoreTopics();