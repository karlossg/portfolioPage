


$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$(document).ready(function(){
    /**
     * This object controls the nav bar. Implement the add and remove
     * action over the elements of the nav bar that we want to change.
     *
     * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
     */
    var myNavBar = {

        flagAdd: true,

        elements: [],

        init: function (elements) {
            this.elements = elements;
        },

        add : function() {
            if(this.flagAdd) {
                for(var i=0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className += " fixed-theme";
                }
                this.flagAdd = false;
            }
        },

        remove: function() {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
            }
            this.flagAdd = true;
        }

    };

    /**
     * Init the object. Pass the object the array of elements
     * that we want to change when the scroll goes down
     */
    myNavBar.init(  [
        "header",
        "header-container",
        "brand"
    ]);

    /**
     * Function that manage the direction
     * of the scroll
     */
    function offSetManager(){

        var yOffset = 0;
        var currYOffSet = window.pageYOffset;

        if(yOffset < currYOffSet) {
            myNavBar.add();
        }
        else if(currYOffSet == yOffset){
            myNavBar.remove();
        }

    }

    /**
     * bind to the document scroll detection
     */
    window.onscroll = function(e) {
        offSetManager();
    }

    /**
     * We have to do a first detectation of offset because the page
     * could be load with scroll down set.
     */
    offSetManager();

    /* Enable smooth scrolling on all links with anchors */
    $('#nav.smoothscroll ul li a[href^="#"]').on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $('a[name="' + this.hash.replace('#', '') + '"]').offset().top
        }, 300, function(){

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;

        });
    });



});
