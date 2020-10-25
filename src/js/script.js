import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

import hamburger from './modules/hamburger';
import callMe from './modules/callMeback';
import sendForm from './modules/sendForm';
import moreInfo from './modules/pricesMoreInfo';
import goToLink from './modules/toLink';


window.addEventListener('DOMContentLoaded', () => {
    hamburger();
    callMe();
    sendForm();
    moreInfo();
    goToLink();

    tns({
        container: '.reviews__tiny-slider',
        items: 1,
        speed: 600,
        controls: true,
        nav: true,
        controlsContainer: '.arrows',
        navContainer: '.dots',
        responsive: {
            1: {
            },
            500: {
            },
            769: {
                items: 3,
                gutter: 20,
                nav: false,
                
                
            },
            1201: {
                gutter: 40,
            }
        },
    });
    
});
