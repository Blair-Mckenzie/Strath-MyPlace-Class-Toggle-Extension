const classNames = [" 19520 / EM501: Group Project", " 19520: Group Project", " CS551: Mobile Software And Applications",
    " CS982: Big Data Technologies", " CS985: Machine Learning For Data Analytics", " EE579: Advanced Microcontroller Applications"];

//Making sure the page has completed loading to access the LI containing
// all the items the student has selected. Each item in the list comapared
// against student selected classes only   
document.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 'complete') {
        let ul = document.querySelector("ul.list-group.classlist");
        let classes = ul.childNodes;
        console.dir(ul);
        for (let i = 1; i < ul.childNodes.length; i++) {
            if (classNames.indexOf(classes[i].innerText) === -1) {
                classes[i].innerHTML = '';
            }
        }
    }
});


