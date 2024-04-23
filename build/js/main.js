const header = document.getElementById('header');
header.innerHTML = `
<div class="w-20 logocontainer">
<a href="/"><img class="w-screen" src="imgs/king-capital.png" alt="Kings Capital"></a>
</div>

<button id="toggle-button" class="text-3xl sm:hidden focus:outline-none text-themeColor font-extrabold">
&#9776;
</button>

<nav id="navbar" class="sm:relative fixed h-screen transition-transform translate-x-full  top-0 w-full left-0 flex flex-col sm:flex-row items-center gap-10  bg-slate-100  space-x-8 p-10 sm:p-0 sm:text-lg  text-xl sm:translate-x-0 sm:h-auto sm:block sm:w-auto" aria-label="main" style="z-index: 999;">

<button id="close" class="text-themeColor sm:hidden font-extrabold absolute top-10 left-10">
    X
</button>

<a href="index" class="hover:opacity-85 ml-0">Home</a>
<a href="about" class="hover:opacity-85 m-0">Our Company</a>
<a href="services" class="hover:opacity-85 m-0">What We Do</a>
<a href="contact" class="hover:opacity-85 m-0 bg-themeColor lg:py-5 md:px-10 px-7 py-3 text-white uppercase font-bold rounded-sm">Schedule a call</a>
</nav>
`

document.addEventListener('DOMContentLoaded',()=>{
    const toggleButton = document.getElementById('toggle-button')
    const navbar = document.getElementById('navbar');
    
    toggleButton.addEventListener('click',()=>{
        navbar.classList.remove('translate-x-full')
        navbar.classList.add('translate-x-0')
    })
    
    const closeButton = document.getElementById('close');
    closeButton.addEventListener('click',()=>{
        navbar.classList.add('translate-x-full')
        navbar.classList.remove('translate-x-0')
    })
})

const footer = document.getElementById('footer')
footer.innerHTML = `
<!-- prefooter call banner section -->
<section id="call-footer" class="w-full bg-contact-footer min-h-96 bg-cover bg-no-repeat flex gap-4 sm:gap-8 flex-col justify-center items-center p-5 sm:p-0">
    <h1 class="text-white sm:text-5xl font-semibold uppercase w-auto text-3xl flex justify-center text-center">Let's start a conversation about your financial future</h1>
    <p class="text-white text-l sm:text-3xl text-center capitalize">Reach out to us today and take the first step towards securing your financial future</p>
    <a href="contact" class="mt-2 hover:opacity-85 bg-slate-50 lg:py-5 lg:px-16 px-7 py-3 text-themeColor uppercase font-bold rounded-sm lg:text-xl z-50  w-full sm:w-auto text-center">Schedule a call</a>
</section>

<section id="copyrights" class=" bg-teal-950 p-5 flex flex-col justify-center gap-5 items-center">
    <a href="/"><img src="imgs/king-capital.png" alt="Kings Capital" class="max-w-24"></a>
    <p class="text-white text-sm">© 2024 Kings Capital</p>
</section>



`
