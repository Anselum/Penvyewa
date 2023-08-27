let elements = document.querySelectorAll('.to-observe');

const options = {
    root: null,
    threshold: 0,
    rootMargin: "150px 200px 0px",
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);


setTimeout(() => {
    elements.forEach((element) => {
        observer.observe(element);
    });
}, 8500)