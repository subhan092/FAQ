const data = [
    {
        id : '1',
        question: "dhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhddddddd",
        answer : "hsjfhjdshjhfjhdjshjjjsjffjshjhjahhhhhdjhsydyyyyyyyyeertyuddfygchhgduujjjjjjjjjjjjjjjjhjshhdjsjhdgsdhvhv"
    },
    {
        id : '2',
        question: "dhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhddddddd",
        answer : "hsjfhjdshjhfjhdjshjjjsjffjshjhjahhhhhdjhsydyyyyyyyyeertyuddfygchhgduujjjjjjjjjjjjjjjjhjshhdjsjhdgsdhvhv"
    },
    {
        id : '3',
        question: "dhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhddddddd",
        answer : "hsjfhjdshjhfjhdjshjjjsjffjshjhjahhhhhdjhsydyyyyyyyyeertyuddfygchhgduujjjjjjjjjjjjjjjjhjshhdjsjhdgsdhvhv"
    },
    {
        id : '4',
        question: "dhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhddddddd",
        answer : "hsjfhjdshjhfjhdjshjjjsjffjshjhjahhhhhdjhsydyyyyyyyyeertyuddfygchhgduujjjjjjjjjjjjjjjjhjshhdjsjhdgsdhvhv"
    },
    {
        id : '5',
        question: "dhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhddddddd",
        answer : "hsjfhjdshjhfjhdjshjjjsjffjshjhjahhhhhdjhsydyyyyyyyyeertyuddfygchhgduujjjjjjjjjjjjjjjjhjshhdjsjhdgsdhvhv"
    }
];

const faqWraper = document.querySelector(".faq");


function createData() {
    faqWraper.innerHTML = data.map( (dataItem )=>
        `
          <div class ="faq-item">
             <div class="faq-title">
                 <h3> ${dataItem.question} </h3>
                 <i class="fa-solid fa-arrow-down"></i> 
                
             </div>

             <div class ="faq-content">
             <p> ${dataItem.answer}</p>
             </div>

          </div>
        `
    ).join("");
}
createData();

let getFaqTitle  = document.querySelectorAll('.faq-title');
console.log( getFaqTitle);

getFaqTitle.forEach( (element )=> {
    element.addEventListener("click", ()=>{
        if (element.classList.contains("active")) {
            element.classList.remove("active");
        }
        else{
            let getAlreadyActiveClass  = document.querySelectorAll("active");

            getAlreadyActiveClass.forEach((currentActiveItem) =>{
                currentActiveItem.classList.remove("active");
            })
            //remove class who previosily active
            element.classList.add("active");
        }
        
    });
});

