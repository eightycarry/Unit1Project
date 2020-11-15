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

        //make a name variable and retrieve the input
        var name = $("#name").val();

        //make an address variable and retrieve the input
        var address = $("#address").val();

        //make a phone number variable and retrieve the input
        var phoneNumber = $("#phone").val();

        //ask jQuery for selected pizza size
        var selectedSize = $("input[name=size]:checked").val();

        //get the data-price value for the selected size and convert to a number
        var sizeTotal = parseFloat($("input[name=size]:checked").data("price"));

        //ask jQuery for selected pizza crust
        var selectedCrust = $("input[name=crust]:checked").val();

        //ask jQuery for all selected meats boxes
        var selectedMeats = [];
        $("input[name=meats]:checked").each(function() {
            selectedMeats.push($(this).val());
        });

        //collect total price of selected meats
        //check which meats were selected, then add $1.50 for each
        var meatTotal = $("input[name=meats]:checked").length;
        meatTotal *= 1.50;

        //ask jQuery for all selected veggie boxes
        var selectedVeggies = [];
        $("input[name=veggies]:checked").each(function() {
            selectedVeggies.push($(this).val());
        });

        //collect total price of selected veggies
        var veggieTotal = $("input[name=veggies]:checked").length;

        //declare subtotal variable and
        //add the prices of everything to get subtotal
        var subTotal = (sizeTotal + meatTotal + veggieTotal);

        //add sales tax and delivery fee to subtotal
        var taxTotal = subTotal * .051;
        var grandTotal =  subTotal + taxTotal + 2.0;

        //output to review tab
        $("#nameOutput").text(name);
        $("#addressOutput").text(address);
        $("#phoneOutput").text(phoneNumber);
        $("#sizeOutput").text(`Pizza Size: ${selectedSize}`);
        $("#crustOutput").text(`Crust Type: ${selectedCrust}`);
        $("#meatOutput").text(`Meats: ${selectedMeats}`);
        $("#veggieOutput").text(`Veggies: ${selectedVeggies}`);
        $("#subtotalOutput").text(`Subtotal: $${parseFloat(subTotal).toFixed(2)}`);
        $("#salesTaxOutput").text(`Sales Tax: $${parseFloat(taxTotal).toFixed(2)}`);
        $("#deliveryFeeOutput").text(`Delivery Fee: $2.00`);
        $("#totalOutput").text(`Your total is $${parseFloat(grandTotal).toFixed(2)}`);
        $("#thanks").text(`Thank you for your order! Your pizza is on the way!`);
    }
});