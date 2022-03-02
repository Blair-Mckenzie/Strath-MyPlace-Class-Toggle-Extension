const classNames = [" 19520 / EM501: Group Project", " 19520: Group Project", " CS551: Mobile Software And Applications",
    " CS982: Big Data Technologies", " CS985: Machine Learning For Data Analytics", " EE579: Advanced Microcontroller Applications"];

//Making sure the page has completed loading to access the LI containing
// all the items the student has selected. Each item in the list comapared
// against student selected classes only
window.onload = (e) => {
    let timeout = setTimeout(() => {
            let ul = document.querySelector("ul.list-group.classlist");
            ul.childNodes.forEach(childNode => {
                if (!classNames.includes(childNode.innerText)) {
                    childNode.textContent = '';
                }})
        // }
    },1000);
};


