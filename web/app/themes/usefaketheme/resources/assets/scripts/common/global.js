jQuery(document).ready(function($) {
    var global = {
        init_fullpage: function () {
            $('#__site_sections').fullpage({
                onLeave: function(index, nextIndex, direction){
                    console.log("Next Page Index: " + nextIndex);
                },
                scrollBar: true
            });
        },
    };

    global.init_fullpage();
});