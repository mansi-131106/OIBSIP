function showSection(id){
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

function showSkillImage(skill){
    const img = document.getElementById('skillImage');
    img.classList.remove('hidden');

    if(skill === 'html'){
        img.src = "https://cdn-icons-png.flaticon.com/512/732/732212.png";
    }
    if(skill === 'css'){
        img.src = "https://cdn-icons-png.flaticon.com/512/732/732190.png";
    }
    if(skill === 'design'){
        img.src = "https://cdn-icons-png.flaticon.com/512/1006/1006363.png";
    }
}

function showCertificate(type){
    const img = document.getElementById('certificateImage');
    img.classList.remove('hidden');

    if(type === 'c'){
        img.src = "bettle of c.jpeg";
    }
    if(type === 'bis'){
        img.src = "Bureau of indian standards.jpeg";
    }
    if(type === 'ai'){
        img.src = "Master class with AI.jpeg";
    }
}
function goHome(){
    alert("Message Sent Successfully!");
    showSection('home');
}

