let images = document.getElementsByClassName("slika");
let background = document.querySelector(".slider");
let square = document.getElementsByClassName("fa-square");
let slide_contents = document.getElementsByClassName("slide_content");
let sc_copy = document.querySelector(".sc_copy")

let x = 0;
let prevx = 0;
let sqn = 0;
let right = true;
let slider = false;
let timeout = 7000;
let myInterval = setInterval(slide_right, timeout);

console.log(background);

function slide_right()
{
    right = true;
    slider = false;
    slide();
}

function slide_left()
{
    right = false;
    slider = false;
    slide();
}

function slide()
{
    clearInterval(myInterval);
    myInterval = setInterval(slide_right, timeout);
    if(slider === false) prevx = x;
    background.style.backgroundImage = `url(${images[prevx].childNodes[1].src})`;
    for(let i = 0; i <= square.length - 1; i++)
    {
        if(square[i].classList.contains("unactive-square"))
        {
            console.log(square[i]);
            square[i].classList.remove("unactive-square");
        };
        if(square[i].classList.contains("active-square"))
        {
            console.log(square[i]);
            square[i].classList.remove("active-square");
        };
    }
    sc_copy.innerHTML = slide_contents[prevx+1].innerHTML;
    square[x].classList.toggle("unactive-square")
    if(right === true)
    {
        x++;
        if(x > 3) x = 0;
    }
    else if(right === false)
    {
        x--;
        if(x < 0) x = 3;
    }
    for(let i = 0; i <= images.length - 1; i++)
    {
        if(images[i].classList.contains("active_right"))
        {
            images[i].classList.remove("active_right")
        }
        else if(images[i].classList.contains("active_left"))
        {
            images[i].classList.remove("active_left");
        }
    }
    if(right === true) images[x].classList.toggle("active_right");
    else images[x].classList.toggle("active_left");
    square[x].classList.toggle("active-square")
}

function square_click()
{
    slider = true;
    let n = parseInt(event.currentTarget.dataset.sn);
    prevx = x;
    if(n === x)
    {
        return;
    }
    else if(n > x)
    {
        x = n - 1;
        right = true;
    }
    else if(n < x)
    {
        x = n + 1;
        right = false;
    }
    slide();
}
