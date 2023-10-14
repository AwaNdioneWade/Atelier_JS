let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{
    quote: "The best way to live happy I do the very best i knoow how - the very best I can; and I mean  to keep on doing so until the end.",
    person: "Mahatma Gandi"
}, {
    quote: "If you want to live I do the very best i knoow how - the very best I can; and I mean  to keep on doing so until the end.",
    person: "Albert Einstein"
}, {
    quote: "At his best, main is the noblest I do the very best i knoow how - the very best I can; and I mean  to keep on doing so until the end.",
    person: "Aristolte"
}, {
    quote: "Your time is limited, so dont waste I do the very best i knoow how - the very best I can; and I mean  to keep on doing so until the end.",
    person: "Steven Jobs"
}, {
    quote: "Tell me and i forget I do the very best i knoow how - the very best I can; and I mean  to keep on doing so until the end.",
    person: "Benjamin Franklin"
}, {
    quote: "t does not matter I do the very best i knoow how - the very best I can; and I mean  to keep on doing so until the end.",
    person: "Oprah Winfrey"
}, {
    quote: "Our lives begin to end I do the very best i knoow how - the very best I can; and I mean  to keep on doing so until the end.",
    person: "Conficius"
}, {
    quote: "Bemember that not getting what you want is I do the very best i knoow how - the very best I can; and I mean  to keep on doing so until the end.",
    person: "Martin Luther King, Jr."
}
]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})