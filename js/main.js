elements = {
    main: document.querySelector('.main'),
    nav: document.querySelector('.nav'),
    header: document.querySelector('.header'),
    navs: document.querySelector('.navs'),
    banner: document.getElementById('main_section-banner'),
    menuBtn: document.querySelector('.boats_tours'),
    subMenu: document.querySelector('.sub-menu').children,
    excBtn: document.querySelector('.excursion'),
    boatBtn: document.querySelector('.boat'),
    page: document.querySelector('.page'),
    body: document.querySelector('.body')
}

// clearing subMenu btns
const clearSubMenu = () => {
    if(elements.navs) {
        for(let i = 0; i < elements.subMenu.length; i++) {
            elements.subMenu[i].children[0].removeAttribute('style');
        }
    
        let stuckSubMenu = elements.navs.querySelector('.isStuck').querySelector('ul[class="sub-menu"]').children;
    
        for(let i = 0; i < stuckSubMenu.length; i++) {
            stuckSubMenu[i].children[0].removeAttribute('style');
        }
    }
}

// clearing subMenu btns 1024
const clearSubMenuTablet = () => {
    if(elements.navs) {
        for(let i = 0; i < elements.subMenu.length; i++) {
            elements.subMenu[i].children[0].removeAttribute('style');
        }
    }
}

// emphasizing current menu element
const activeElement = e => {
    const stuck = document.querySelector('.isStuck');

    let stuckNav = Array.from(stuck.querySelectorAll('li'));
    
    stuckNav.forEach(el => el.classList.remove('active'));

    const btns = Array.from(elements.nav.querySelectorAll('li'));

    btns.forEach(el => el.classList.remove('active'));

    const target = e.target.closest('li');

    if(!target.style.opacity) {

        target.classList.add('active');

        sessionStorage.removeItem('activated');

    } else {
        target.classList.add('active');

        sessionStorage.setItem('activated', e.target.closest('li').classList[0]);

        target.parentNode.parentNode.classList.add('active');
    } 
    let btnIndex = btns.findIndex(el => el.classList.contains('active'));

    stuckNav[btnIndex].classList.add('active');
};

// emphasizing current menu element in tablet version 
const activeElementTablet = e => {    

    const btns = Array.from(elements.nav.querySelectorAll('li'));

    btns.forEach(el => el.classList.remove('active'));

    const targetClasses = e.target.closest('li').classList;

    targetClasses.add('active');


    if(!e.target.closest('li').style.opacity) {

        targetClasses.add('active');

        sessionStorage.removeItem('activated');

    } else {
        targetClasses.add('active');

        sessionStorage.setItem('activated', e.target.closest('li').classList[0]);

        e.target.closest('li').parentNode.parentNode.classList.add('active');
    } 
};


// emphasizing current menu element in mobile version 
const activeElementMobile = e => {

    clearCurEl();

    const subList = document.querySelector('.rd-with-ul');

    if(e.target.matches('.boats_tours')) {

        if(e.target.closest('a').classList[0] === 'boats_tours') {

            if(e.target.style) e.target.removeAttribute('style');

        }
    } else if(e.target.matches('.excursion')||e.target.matches('.boat')) {

        subList.style.background = '#9f9f9f';

        subList.style.color = '#f7f7f7';

    } else {
        subList.removeAttribute('style');
    }

    const btns = Array.from(document.querySelector('.rd-mobilemenu_ul').querySelectorAll('li'));

    btns.forEach(el => el.classList.remove('active'));

    const targetClasses = e.target.closest('li').classList;

    if(!targetClasses.contains('excurcions')&&!targetClasses.contains('boats')) {

        targetClasses.add('active');

        sessionStorage.removeItem('activated');

    } else {
        targetClasses.add('active');

        sessionStorage.setItem('activated', e.target.closest('li').classList[0]);

        e.target.closest('li').parentNode.parentNode.classList.add('active');
    } 
}

// clearing submenu active elements in mobile version
const clearSubMenuMob = () => {
    Array.from(document.querySelector('.rd-mobilemenu_submenu').children).forEach(el => el.removeAttribute('style'));
}

// clearing main container for the next item
const clearMain = () => {
    const el = document.querySelector('#main_section');

    if(el) elements.main.removeChild(el);
}

renderPage = e => {
    if(e.target.nodeName === 'A') {

        const htmlClasses = Array.from(document.querySelector('html').classList);

        if(htmlClasses.includes('desktop')) {
            activeElement(e);
            clearSubMenu();
        } else if(window.screen.width === 1024||window.screen.width === 768) {
            activeElementTablet(e);
            clearSubMenuTablet();
        } else if(htmlClasses.includes('mobile')) {
            clearSubMenuMob();
            activeElementMobile(e);
        } 

        const section = e.target.closest('a').classList[0];

        if(section !== 'home') elements.banner.style.display = 'none';

        if(section !== 'contactdetails') {
            e.preventDefault();
        };

        clearMain();

        let markup;

        switch(section) {
            case 'home':
            elements.banner.style.display = 'block';
            break;

            case 'boat':
            case 'boats_tours':
                markup = `
                <section id="main_section" class="well-3--inset-1 bg-default-variant-1 text-center boats_tours-section">
                <div class="container">
                <div class="row offset-1 flow-offset-1 text-md-left">
                <div class="col-md-5">
                  <div class="infinity-slider-wrap">
                    <div class="infinity-slider">
                      <img src="images/searey/2.jpg" alt="Sea Rey">
                      <img src="images/searey/3.jpg" alt="Sea Rey">
                      <img src="images/searey/4.jpg" alt="Sea Rey">
                      <img src="images/searey/5.jpg" alt="Sea Rey">
                      <img src="images/searey/6.jpg" alt="Sea Rey">
                      <img src="images/searey/7.jpg" alt="Sea Rey">
                      <img src="images/searey/1.jpg" alt="Sea Rey">
                    </div>
                    <img class="btn-to-left" src="images/vector/arrow-point-to-left.svg" alt="to-left">
                    <img class="btn-to-right" src="images/vector/arrow-point-to-right (2).svg" alt="to-right">
                  </div>
                </div>
                <div class="col-md-7 inset-5">
                  <h4 class="vertical-line-variant-3">
                    <a href="#">Sea Rey 65</a><span class="heading-6 inset-3">12 guests (5-8 guests recommended)</span>
                  </h4>
                  <ul class="marked-list">
                    <span>Boat description:</span><br><br>
                    <li><a href="#">Sea Ray brand</a></li>
                    <li><a href="#">+ Sea Doo (Jet ski)</a></li>
                    <li><a href="#">4 Staterooms, 3 Heads</a></li>
                    <li><a href="#">Length 65"</a></li>              
                  </ul>
                  <ul class="marked-list">
                    <span>Tours:</span><br><br>
                    <li><a href="#">Charters</a></li>
                    <li><a href="#">Dinners</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Overnight Stays</a></li>
                    <li><a href="#">Weekend Getaways</a></li>
                    <li><a href="#">Photo shoots</a></li>
                  </ul>
                  <ul class="marked-list">
                    <!-- <li><a href="#">Overnight Stays</a></li>
                    <li><a href="#">Weekend Getaways</a></li>
                    <li><a href="#">Photo shoots</a></li> -->
                  </ul>
                </div>
              </div>
              </div>
              </section>
                `;
                elements.main.insertAdjacentHTML('afterbegin', markup);
                break;

            case 'faq':
            markup = `
            <section id="main_section" class="well-3--inset-1 bg-default-variant-1">
                <div class="container">
                    <h3 class="text-center">Rules</h3>
                    <dl class="terms-list">
                        <dt class="heading-5">Observe safety rules on the water.</dt>
                        <dd> - No shoes are on the boat.<br> 
                        - Smoking is only on the back platform of the boat during a stop.<br>
                        
                        <strong>When to arrive</strong><br>
                        Please, be on time!<br>
                        15 minutes prior to your reservation time is the best shot. Arriving at least 15 minutes in
                        advance allows you extra time in case you get lost, can’t find parking, have a lot to unload
                        out of your vehicle, to use the restroom prior to your rental, paperwork, and instructions.
                        Rental times are not extended for late arrivals.<br>
                        <strong>Cancellation policy</strong><br>
                        We offer a full refund for cancellations made within 24 hours of booking. For
                        cancellations made up to 7 days after the booking date, a 10% handling fee is retained. For
                        bookings cancelled up to 30 days before the check-in date, a 50% refund of the total
                        amount is applied. Cancellations made within less than 30 days of the check-in date are not
                        eligible for refund. Please be aware that the conditions of our charter partners’ own
                        policies apply. If you have further questions regarding our cancellation policy, please
                        contact us.<br>
                        <strong>Are there any other costs I should be aware of?</strong><br>
                        There are marina fees and fuel costs which vary depending on the type, duration and
                        location of your sailing holiday. Marina fees need to be paid at each marina you choose to
                        dock overnight - the amount varies but you may be able to find this information in advance
                        by contacting the marinas directly. Fuel costs depend on whether you’re sailing a
                        motorboat or a sailboat. You can estimate fuel costs by double-checking your chosen
                        boat’s engine, and the expected distance you aim to sail.<br>
                        <strong>Security Deposit</strong><br>
                        Similarly to renting a car, chartering a boat requires a security deposit. The deposit,
                        refundable after check-out, covers you and your fellow passengers against accidental
                        damage and ensures that contractual obligations are met. The security deposit varies in
                        value depending on the model and brand of the boat. It will be returned to you after the
                        boat has been inspected and is deemed undamaged.<br>                    
                            <br>
                            <br>
                        </dd>
                    </dl>
                </div>
            </section>    
            `;
            elements.main.insertAdjacentHTML('afterbegin', markup);
            break;

            default:
            elements.banner.style.display = 'block';
        }
    }  
}

const renderInfo = e => {
    clearMain();
    let markup;
    switch(e.target.textContent) {
        case 'Sea Rey 65':
            markup = `
            <section id="main_section" class="well-3--inset-1 bg-default-variant-1">
                <div class="container">
                    <dl class="terms-list">
                        <div class="infinity-slider-wrap">
                        <div class="infinity-slider">
                            <img src="images/searey/2.jpg" alt="Sea Rey">
                            <img src="images/searey/3.jpg" alt="Sea Rey">
                            <img src="images/searey/4.jpg" alt="Sea Rey">
                            <img src="images/searey/5.jpg" alt="Sea Rey">
                            <img src="images/searey/6.jpg" alt="Sea Rey">
                            <img src="images/searey/7.jpg" alt="Sea Rey">
                            <img src="images/searey/1.jpg" alt="Sea Rey">
                        </div>
                        <img class="btn-to-left" src="images/vector/arrow-point-to-left.svg" alt="to-left">
                        <img class="btn-to-right" src="images/vector/arrow-point-to-right (2).svg" alt="to-right">
                        </div><br>
                        <h3 class="text-center">sea rey 65</h3>
                        <div class="sub-title">
                        <span>+ Sea Doo (Jet ski)</span><br><br>
                        </div>
                        <div class="guests-count"><strong>12 guests (5-8 guests recommended)</strong></div>
            
                        <div class="info-row">
                        <div class="info-block">
                            <dt class="heading-5">Boat description:</dt>
                            <dd>
                            <ul class="marked-list">
                                <li>Sea Ray brand</li>
                                <li>4 Staterooms, 3 Heads</li>
                                <li>Length 65"</li>              
                            </ul>
                            </dd>
                        </div>
                        <div class="info-block">
                            <dt class="heading-5">Tours:</dt>
                            <dd>
                            <ul class="marked-list">
                                <li>Charters</li>
                                <li>Dinners</li>
                                <li>Events</li>
                                <li>Overnight Stays</li>
                                <li>Weekend Getaways</li>
                                <li>Photo shoots</li>
                            </ul>
                            </dd>  
                        </div>  
                        <div class="info-block">
                            <dt class="heading-5">Includes:</dt>  
                            <dd> 
                            <ul class="marked-list">
                                <li>Rental of Vessel</li>
                                <li>Captain, Stewardess/Mate</li>
                                <li>Local Idle Fuel and Tender Fuel</li>
                                <li>Beverages (Water, Coke, Diet Coke, Sprite) and Ice</li>
                                <li>Towels</li>
                            </ul>
                            </dd>
                        </div>
                        </div>  
                        <br><br>
                        <div class="info-row">
                        <div class="info-block">
                            <dt class="heading-5">Entertainment:</dt>  
                            <dd>Bluetooth music, Floats island, Water Toys</dd>
                        </div>
                        <div class="info-block">
                            <dt class="heading-5">Price:</dt>  
                            <dd>Starting at $2,700</dd>
                        </div>
                        <div class="info-block">
                            <dt class="heading-5">Rental Period:</dt>  
                            <dd>4 hours, 6 hours, 8 hours</dd>
                        </div>
                        </div>
                        <p class="tax-description">
                        Not included:<br>
                        <em>
                            * Additional: 7% Florida Sales Tax<br>
                            * Additional: 15-20% Customary Gratuity<br>
                        </em>
                        </p>
                    </dl>
                </div>
            </section>
            `;
            elements.main.insertAdjacentHTML('afterbegin', markup);
            break;
    }
}

const stressCurEl = e => {
    const el = document.querySelector('.rd-mobilemenu_ul li.active').children[0];
    el.style.background = '#9f9f9f';
    el.style.color = '#f7f7f7';
    getSubItem(e);
}
const clearCurEl = () => {
    document.querySelector('.rd-mobilemenu_ul li.active').children[0].removeAttribute('style');
}

const getSubItem = e => {
    if(sessionStorage.getItem('activated')) {

        const subMenu = document.querySelector('.rd-mobilemenu_submenu');

        const el = sessionStorage.getItem('activated');

        const item = subMenu.querySelector(`.${el}`);

        e.target.parentNode.removeAttribute('style');

        item.style.background = '#9f9f9f';
        item.style.color = '#f7f7f7';
    } 
}

elements.nav.addEventListener('click', renderPage);

elements.navs.addEventListener('click', e => {
    if(document.querySelector('html').classList.contains('desktop')) {

        const stuck = elements.navs.querySelector('.isStuck');

        if(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('isStuck')) {
            document.querySelector(`.${e.target.classList[0]}`).click();
        } else if (e.target === stuck.querySelector('a[class="excursion"]')) {
            elements.excBtn.click();
        } else if (e.target === stuck.querySelector('a[class="boat"]')) {
            elements.boatBtn.click();
        }
    }


});

elements.body.addEventListener('click', e => {
    const el = e.target.parentNode.parentNode; 
    if(el === document.querySelector('.rd-mobilemenu_ul')||el === document.querySelector('.rd-mobilemenu_submenu')) {

        renderPage(e);

    } else if (e.target.matches('.vertical-line-variant-3 a')) {

        renderInfo(e);

    } else if(e.target.matches('.rd-mobilepanel_toggle, .rd-mobilepanel_toggle *')) {

        stressCurEl(e);

        let els = Array.from(document.querySelector('.rd-mobilemenu_submenu').children).map(el => el.classList.contains('active'));
        if(!els.includes(true)) {
            document.querySelector('.rd-with-ul').classList.remove('active')
            document.querySelector('.rd-mobilemenu_submenu').style.display ='none';
        };
    } else if(e.target.matches('.rd-submenu-toggle')) {
        if(!document.querySelector('.boats_tours-section')) {
            e.target.parentNode.style.background = '#f7f7f7';
            e.target.parentNode.style.color = '#9f9f9f';
        }
        stressCurEl(e);
    }
});

elements.navs.addEventListener('mouseover', e => {
    if(Array.from(document.querySelector('html').classList).includes('desktop')) {
        if(e.target.closest('.sub_menu')) {
            let stuck = document.querySelector('.isStuck');
            let el = sessionStorage.getItem('activated');
    
            if(el) stuck.querySelector(`.${el}`).children[0].style.color = '#c09551';
        }
    }
});

elements.menuBtn.addEventListener('mouseover', () => {
    let el = sessionStorage.getItem('activated');

    if(el) {
        document.querySelector(`.${el}`).children[0].style.color = '#c09551';
    }

});

window.onclose = sessionStorage.clear();


