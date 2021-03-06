/**
 * Created by Eason on 2016/8/10.
 */
$(document).ready(function(){
    //        $('a[data-toggle="tab"]').on("show.bs.tab");
    $("#mynavbar li").hover(function(e){
//            e.preventDefault();
        $(this).tab("show");

    });

    $("#onepage-nav a").click(function(e){
        e.preventDefault();
        $(this).tab("show");
    });

    $(".carousel").carousel({
        interval:2000
    });

    $('.collapse').collapse();

});
// bootstrap响应式导航条
;(function($, window, undefined) {
    // outside the scope of the jQuery plugin to
    // keep track of all dropdowns
    var $allDropdowns = $();
    // if instantlyCloseOthers is true, then it will instantly
    // shut other nav items when a new one is hovered over
    $.fn.dropdownHover = function(options) {

        // the element we really care about
        // is the dropdown-toggle's parent
        $allDropdowns = $allDropdowns.add(this.parent());

        return this.each(function() {
            var $this = $(this).parent(),
                defaults = {
                    delay: 300,
                    instantlyCloseOthers: true
                },
                data = {
                    delay: $(this).data('delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                },
                options = $.extend(true, {}, defaults, options, data),
                timeout;

            $this.hover(function() {
                if(options.instantlyCloseOthers === true)
                    $allDropdowns.removeClass('open');

                window.clearTimeout(timeout);
                $(this).addClass('open');
            }, function() {
                timeout = window.setTimeout(function() {
                    $this.removeClass('open');
                }, options.delay);
            });
        });
    };

    $('[data-hover="dropdown"]').dropdownHover();
})(jQuery, this);