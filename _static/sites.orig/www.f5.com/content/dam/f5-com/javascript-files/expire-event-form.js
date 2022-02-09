(function (d) {
    var desc = d.querySelector('meta[name="description"]');
    var today = new Date();
    var eventDate = desc && desc.content ? new Date(desc.content.split('|')[1]) : 0;

    if (typeof MktoForms2 === 'object' && eventDate && isValidDate(eventDate)) {

        today.setHours(0, 0, 0, 0);
        eventDate.setHours(0, 0, 0, 0);
        expired = eventDate < today;

        MktoForms2.whenReady(function (form) {
            var formEl = form.getFormElem()[0];
            var msg = d.getElementById("registrationClosedMessage");

            if (expired) {               
                formEl.innerHTML = msg ? '' : '<p class="display-3">Event registration has closed</p>';
            } 
            if (expired && msg) {               
                for (let i = msg.classList.length - 1; i >= 0; i--) {
                    var className = msg.classList[i];
                    if (className.startsWith('hidden')) {
                        msg.classList.remove(className);
                    }
                }              
            }
        });
    }
    function isValidDate(d) {
        return d instanceof Date && !isNaN(d);
    }
})(document);