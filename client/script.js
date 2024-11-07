document.getElementById('templateSelector').addEventListener('change', function() {
    const templateName = this.value;
    fetch(`http://localhost:3000/template/${templateName}`)
        .then(response => response.text())
        .then(template => {
            document.getElementById('templateContainer').innerHTML = template;
        });
});