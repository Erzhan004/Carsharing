
var dropdownToggle = document.querySelector('.dropdown-toggle');
    document.addEventListener('DOMContentLoaded', function() {
        var dropdownMenu = document.querySelector('.dropdown-menu');
        var dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');
        dropdownToggle.addEventListener('click', function() {
            dropdownMenu.classList.toggle('show');
        });


        dropdownItems.forEach(function(item) {
            item.addEventListener('click', function() {
 
                // var language = item.textContent.trim();

                // dropdownToggle.textContent = localStorage.getItem('language') == 'rus' ? 'Русский' : 'English';

                dropdownMenu.classList.remove('show');

            });
        });
    });

var arrLang= {
    'en':{
        'home': 'Home',
        'guide': 'Guide',
        'services': 'Cars',
        'about': 'About',
        'news': 'News Page',
        'look': 'Looking',
        'to': ' to',
        'rentcar': 'rent car',
        'HowItsWork': 'How Its Work',
        'steps': "Rent With Easy 3 Steps",
        'location': "Choose A Location",
        'location_text': 'Choose a location convenient for you to pick up the car.',
        'pick_up': 'Rental Date',
        'pick_up_text': 'Choose a time convenient for you to pick up the car and a date for returning the car',
        'book': 'Book A Car',
        'book_text': 'Choose a car from the list and make a reservation.',
        'best_cars': 'Best Cars',
        'topDeals': 'Our Top Deals',
        'fromTop':'From Top Rated Dealers',
        'RentNow': 'Rent Now',
        'ABOUTUS': 'ABOUT US',
        'About1': 'Who We Are and What We Do',
        'About2': 'We are a company specializing in car-sharing services, aiming to make urban transportation convenient, accessible, and environmentally friendly.',
        'About3': 'Our company is a team of professionals deeply committed to the idea of carpooling to reduce the burden on urban infrastructure and minimize harmful emissions.',
        'news_titel': "GET THE WORLD'S LATEST AUTO NEWS",
        'news_titel2': "World's Leading Auto News",


 
    },
    'rus':{
        'home': 'Главная',
        'guide': 'Гайд',
        'services': 'Машины',
        'about': 'О Нас',
        'news': 'Новости',
        'look': 'Ищите ',
        'to': 'машину для аренды',
        'rentcar': '',
        'HowItsWork': 'Как это работает',
        'steps': "Аренда автомобиля в 3 простых шагаx",
        'location': "Выберите Место",
        'location_text': 'Выберите место, где вам удобно забрать машину',
        'pick_up': 'Дата Аренды',
        'pick_up_text': 'Выберите время, которое вам удобно для получения машины, и дату возврата',
        'book': 'Cделайте Бронирование',
        'book_text': 'Выберите автомобиль из списка и сделайте бронирование.',
        'best_cars': 'Лучшие Автомобили',
        'topDeals': 'Наши лучшие предложения',
        'fromTop':'От Лучших Дилеров',
        'RentNow': 'Забронировать',
        'ABOUTUS': 'О НАС',
        'About1': 'Кто мы и что мы делаем ',
        'About2': 'Мы - компания, специализирующаяся на предоставлении услуг каршеринга, стремящаяся сделать передвижение горожан удобным, доступным и экологически чистым.',
        'About3': 'Наша компания - это команда профессионалов, горячо приверженных идее совместного использования автомобилей для уменьшения нагрузки на городскую инфраструктуру и снижения вредного выброса.',
        'news_titel': 'ПОЛУЧИ ПОСЛЕДНИЕ АВТОНОВОСТИ МИРА',
        'news_titel2': "Ведущие мировые автомобильные новости",

    },
    }


    document.addEventListener('DOMContentLoaded', function() {
        function setLanguage() {
            var lang = localStorage.getItem('language');
            if (!lang) {
                lang = 'en'; 
                localStorage.setItem('language', lang);
            }
            document.querySelectorAll('.lang').forEach(function(item) {
            var key = item.getAttribute('key');
                item.textContent = arrLang[lang][key];
        });
            dropdownToggle.textContent = localStorage.getItem('language') == 'rus' ? 'Русский' : 'English';
        }
    
        setLanguage();
    
        document.querySelectorAll('.translate').forEach(function(element) {
            element.addEventListener('click', function() {
                var lang = this.getAttribute('id');
                localStorage.setItem('language', lang);
                setLanguage();
                console.log(localStorage.getItem('language'));
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var newsPageLink = document.querySelector('.news-link');
        newsPageLink.addEventListener('click', function(event) {

            event.preventDefault();
            var lang = localStorage.getItem('language') || 'en'; 
            var redirectUrl = '/news/' + lang;
            window.location.href = redirectUrl;
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var newsPageLink = document.querySelector('.news-link');
        newsPageLink.addEventListener('click', function(event) {

            event.preventDefault();
            var lang = localStorage.getItem('language') || 'en'; 
            var redirectUrl = '/news/' + lang;
            window.location.href = redirectUrl;
        });
    });