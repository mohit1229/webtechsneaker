const containerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("showani");
        } else {
            entry.target.classList.remove("showani");
        }
    });
});

const hiddenObs = document.querySelectorAll(".sec");
hiddenObs.forEach((el) => containerObserver.observe(el));

const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("showeleani");
        } else {
            entry.target.classList.remove("showeleani");
        }
    });
});

const hiddenEle = document.querySelectorAll(".t1");
hiddenEle.forEach((el) => elementObserver.observe(el));
