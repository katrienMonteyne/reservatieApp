import * as data from './dummy.data';

export default class MenuList {

    constructor(categorie = 1) {
        this.categorie = categorie;
    }



    renderHTML(number = 0) {
        let tableContent = "<tr> </tr>";

        let array;

        switch (number) {
            case '0':
                array = data.koude_dranken;
                break;
            case '1':
                array = data.warme_dranken;
                break;
            case '2':
                array = data.bieren;
                break;
            case '3':
                array = data.sterke_dranken;
                break;
            default:
                array = data.koude_dranken;
                break;
        }

        array.forEach(function (drank) {

            //console.log(drank);

            if (drank === undefined) {
                console.log("bla");
            } else {
                tableContent += "<tr> <td>" + drank.naam + "</td>";

                tableContent += "<td>" + drank.prijs + "</td>";

                tableContent += "</tr>";
            }

        });
        //console.log(tableContent)
        return tableContent;

    }

};