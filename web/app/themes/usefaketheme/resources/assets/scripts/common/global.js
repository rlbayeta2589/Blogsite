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

            $('.__footer-wrapper').hide();

            $('.__footer-link').click(function(){
                $('.__footer-link').removeClass('active');

                $(this).addClass('active');

                $.fn.fullpage.moveTo($(this).attr('destination'));
            });
        },

        init_fullpage: function () {
            $('#__site_sections').fullpage({
                onLeave: function(index, nextIndex, direction){
                    global.update_footer(nextIndex);
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

        update_footer: function (index) {
            if(parseInt(index) == 1) {
                $('.__footer-wrapper').fadeOut(100);
                return;
            }else{
                $('.__footer-wrapper').fadeIn(800);
            }

            $('.__footer-link').removeClass('active');

            var current_page = $('.__footer-link:nth-child(' + (index) + ')');
            current_page.addClass('active');
        }
    };

    global.init_pageload();
    global.init_fullpage();
    global.init_chaffle();
});