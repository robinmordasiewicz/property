(function (document) {
    "use strict";

    var m26 = {
        dropdownContainerSelector: ".m26__container.dropdown",
        itemSelector: ".m26__item",
        dropdownSelector: ".dropdown",

        hideClassName: "hide",

        onDropdownToggle: function() {
            document.querySelectorAll(`${m26.itemSelector}.dropdown-placeholder`)
                .forEach(function(dropdownPlaceholder) {
                    dropdownPlaceholder.addEventListener("click", function(e) {
                        var container = e.target.closest(m26.dropdownSelector);
                        var isHide = container.classList.contains(m26.hideClassName);
                        if (isHide) {
                            container.classList.remove(m26.hideClassName);
                        } else {
                            container.classList.add(m26.hideClassName);
                        }
                    });
                });
        },

        onButtonClick: function() {
            document.querySelectorAll(`${m26.dropdownContainerSelector} a`)
                .forEach(function(link) {
                    link.addEventListener("click", function(e) {
                        e.target.closest(m26.dropdownSelector).classList.add(m26.hideClassName);
                    });
                });
        }
    };

    document.addEventListener("DOMContentLoaded", function() {
        m26.onDropdownToggle();
        m26.onButtonClick();
    });
})(document);
