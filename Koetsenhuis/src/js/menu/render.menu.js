'user strict';
import MenuList from './menu';
import * as data from './dummy.data';


let renderMenu = (function () {

    const ml = new MenuList();
    const tableOne = document.querySelectorAll(".menuTable")[0];
    const tableTwo = document.querySelectorAll(".menuTable")[1];

    tableOne.innerHTML = ml.renderHTML(0);
    tableTwo.innerHTML = ml.renderHTML(0);


    let buttonsOne = document.querySelectorAll(".menu_main_first .hexagon");
    let buttonsTwo = document.querySelectorAll(".menu_main_second .hexagon");
    let imagesOne = document.querySelectorAll(".menu_main_first .hexagon img");
    let imagesTwo = document.querySelectorAll(".menu_main_second .hexagon img");

    let allButtons = [buttonsOne, buttonsTwo];
    let allImages = [imagesOne, imagesTwo];

    allButtons.forEach((buttons) => {

        buttons.forEach((button) => {


            button.addEventListener("click", (e) => new function (e) {

                //klasse naam veranderen => tekst zwart <-> grijs
                buttons.forEach((button) => {
                    button.classList.remove("selected");
                })

                // zwarte image verwijderen
                /*    images.forEach((image) => {

                        let imgSource = image.getAttribute("src");
                        if (imgSource.includes("_selected")) {

                            imgSource = imgSource.replace('_selected', "");

                            image.setAttribute("src", imgSource);
                        }
                    });*/

                // Menu lijst inladen van juiste categorie
                let number = button.classList[2]; // juiste button ophalen
                if (button.classList.contains("one")) { // controleren welke tabel

                    let rendermenu = ml.renderHTML(number);
                    tableOne.innerHTML = rendermenu;
                    changeTitle(0, data.titlesOne, number);
                    deleteBlackImage(0, number);
                    addBlackImage(0, number);
                } else if (button.classList.contains("two")) {

                    let rendermenu = ml.renderHTML(number);
                    tableTwo.innerHTML = rendermenu;
                    changeTitle(1, data.titlesTwo, number);
                    deleteBlackImage(1, number);
                    addBlackImage(1, number);
                }

                //klasse naam toevoegen => tekst zwart <-> grijs
                button.classList.add("selected");




            })
        });

    });


    function changeTitle(tableNr, arrTitles, btnNr) {


        let titel = document.querySelectorAll(".menu_main_tekst h1")[tableNr];

        switch (btnNr) {
            case '0':
                titel.innerHTML = arrTitles[0];
                break;
            case '1':
                titel.innerHTML = arrTitles[1];
                break;
            case '2':
                titel.innerHTML = arrTitles[2];
                break;
            case '3':
                titel.innerHTML = arrTitles[3];
                break;
            default:
                titel.innerHTML = arrTitles[4];
                break;
        }
    }


    function deleteBlackImage(tableNr, number) {

        // zwarte image verwijderen

        allImages[tableNr].forEach((image) => {

            let imgSource = image.getAttribute("src");
            if (imgSource.includes("_selected")) {

                imgSource = imgSource.replace('_selected', "");

                image.setAttribute("src", imgSource);
            }
        });

    }


    function addBlackImage(tableNr, number) {
        // Image veranderen
        //let img = document.querySelectorAll(".hexagon img")[number];

        let img = allImages[tableNr][parseInt(number)];

        let fullSource = "";
        let imgArray = img.getAttribute("src").split(".");
        imgArray.splice(1, 0, "_selected.");

        imgArray.forEach((string) => {

            fullSource += string;
        })
        //console.log(fullSource);

        img.setAttribute("src", fullSource);
    }


})();



module.export = renderMenu;