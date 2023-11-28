function divchanger(){
    var courbtn = document.getElementById("course-btn");
    var profbtn = document.getElementById("profile-btn");

        var cours = document.getElementById("course-page");
        var prof = document.getElementById("profile");

    courbtn.addEventListener('click',()=>{
        cours.style.display='flex';
        prof.style.display='none';
    });

    profbtn.addEventListener('click',()=>{
        prof.style.display='flex';
        cours.style.display='none';
    });
}
divchanger()