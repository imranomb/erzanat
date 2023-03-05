let obs = document.querySelectorAll(".obs");

const observer = new IntersectionObserver(entries => 
{
    entries.forEach(entry => {
        entry.target.classList.toggle("obs_show", entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
    } )

obs.forEach(obj => {
    observer.observe(obj);
})