'strict mode'

$(document).ready(function () {

    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });
    
    var myNavBar = {

        flagAdd: true,

        elements: [],

        init: function (elements) {
            this.elements = elements;
        },

        add: function () {
            if (this.flagAdd) {
                for (var i = 0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className += " fixed-theme";
                }
                this.flagAdd = false;
            }
        },

        remove: function () {
            for (var i = 0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
            }
            this.flagAdd = true;
        }

    };

       myNavBar.init([
        "header",
        "header-container",
        "brand"
    ]);

    
    function offSetManager() {

        var yOffset = 0;
        var currYOffSet = window.pageYOffset;

        if (yOffset < currYOffSet) {
            myNavBar.add();
        } else if (currYOffSet == yOffset) {
            myNavBar.remove();
        }

    }

   
    window.onscroll = function (e) {
        offSetManager();
    }

    offSetManager();

   
    $(".bs-js-navbar-scrollspy ul li a[href^='#']").on('click', function (event) {
        var target;
        target = this.hash;

        event.preventDefault();

        var navOffset;
        navOffset = $('#navbar').height();

        return $('html, body').animate({
            scrollTop: $(this.hash).offset().top - navOffset
        }, 300, function () {
            return window.history.pushState(null, null, target);
        });
    });



});
