$(document).ready(function () {
    $("#tabs a").click(showTab);

    function showTab(event) {
        event.preventDefault();
        $(this).tab("show");
        $("form").submit(placeOrder);
    }
    function placeOrder(event) {
        //stop the flashing form
        event.preventDefault();

        //make a subtotal variable
        var subtotal = 0;

        //make a name variable
        var name = $("#name").val();

        //make an address variable
        var address = $("#address").val();

        //make a phone number variable
        var phoneNumber = $("#phone").val();

        //ask jQuery for selected pizza size
        var selectedSize = $("input[name=size]:checked");

        //get the data-price value for the selected size
        selectedSize.each(function() {
            subtotal += $(this).data("price");
        })

        //ask jQuery for selected pizza crust
        var selectedCrust = $("input[name=crust]:checked");

        //ask jQuery for all selected meats boxes
        var selectedMeats = $("input[name=meats]:checked");

        //ask jQuery for all selected veggie boxes
        var selectedVeggies = $("input[name=veggies]:checked");

        //output to review tab
        $("#nameOutput").text(name);
        $("#addressOutput").text(address);
        $("#phoneOutput").text(phoneNumber);
        $("#sizeOutput").text(selectedSize);
        $("#crustOutput").text(selectedCrust);
        $("#meatOutput").text(selectedMeats);
        $("#veggieOutputOutput").text(selectedVeggies);
    }
});