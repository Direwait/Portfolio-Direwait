
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".fade-in").forEach(el=>{
    observer.observe(el);
});
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7QYMNWVD9P"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7QYMNWVD9P');
</script>
