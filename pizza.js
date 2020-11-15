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
        var selectedSize = $("input[name=size]:checked").val();

        //get the data-price value for the selected size
        /*selectedSize.each(function() {
            subtotal += $(this).data("price");
        })*/

        //ask jQuery for selected pizza crust
        var selectedCrust = $("input[name=crust]:checked").val();

        //ask jQuery for all selected meats boxes
        var selectedMeats = [];
        $("input[name=meats]:checked").each(function() {
            selectedMeats.push($(this).val());
        });
        $('#meatOutput').val(selectedMeats);

        //ask jQuery for all selected veggie boxes
        var selectedVeggies = [];
        $("input[name=veggies]:checked").each(function() {
            selectedVeggies.push($(this).val());
        });
        $('#veggieOutputOutput').val(selectedMeats);

        //output to review tab
        $("#nameOutput").text(name);
        $("#addressOutput").text(address);
        $("#phoneOutput").text(phoneNumber);
        $("#sizeOutput").text(selectedSize);
        $("#crustOutput").text(selectedCrust);
        $("#meatOutput").text(selectedMeats);
        $("#veggieOutput").text(selectedVeggies);
    }
});