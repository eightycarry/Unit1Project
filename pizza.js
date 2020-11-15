$(document).ready(function () {

        // event handler(s)
        $("#tabs a").click(showTab);

        // functions
         function showTab(event) {
            event.preventDefault();
            $(this).tab("show");
        }
    });