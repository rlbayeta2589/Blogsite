jQuery(document).ready(function($) {
    var global = {
        TITLES: [
            'Web Developer',
            'Front-end Developer',
            'Software Engineer',
            'UPLB Alumni',
            'BSCS Graduate',
            'Gamer',
            'Cat Lover',
            'Programmer',
            'Classic Introvert',
            'Filipino'
        ],

        init_pageload: function () {
            $('body').removeClass('preload');
        },

        init_fullpage: function () {
            $('#__site_sections').fullpage({
                onLeave: function(index, nextIndex, direction){
                    console.log("Next Page Index: " + nextIndex);
                },
                autoScrolling:true,
                scrollBar: true
            });

        },

        init_chaffle: function () {
            var titleElement = $('.__self-title'),
                currentTitleIndex = Math.floor(Math.random() * (global.TITLES.length + 1));

            titleElement.html(global.TITLES[currentTitleIndex]);
            setInterval(function(){
                currentTitleIndex = (currentTitleIndex + 1 < global.TITLES.length) ? currentTitleIndex + 1 : 0;
                titleElement.html(global.TITLES[currentTitleIndex]);
                new Chaffle(document.getElementById('self-titles'),{speed:10,delay:30}).init();
            }, 8000);
        },
    };

    global.init_pageload();
    global.init_fullpage();
    global.init_chaffle();
});