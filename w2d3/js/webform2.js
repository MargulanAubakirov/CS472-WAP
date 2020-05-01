"use strict"

$(function () {
    // do stuff with the DOM

    /* Listen for submit on entire form */
    $("#productForm").on(
        "submit",
        function (event) {
            event.preventDefault();
            let productNumber = document.getElementById('productNumber').value;
            let quantityInStock = document.getElementById('quantityInStock').value;
            let productName = document.getElementById('productName').value;
            let supplier = document.getElementById('supplier').value;
            let price = document.getElementById('price').value;
            let date = document.getElementById('date').value;

            const obj = {
                "ProductNumber": productNumber,
                "QuantityInStock": quantityInStock,
                "ProductName": productName,
                "Supplier": supplier,
                "Price": price,
                "Date": date
            };
            for (const key in obj) {
                const txt = $("<p>").text(key + ": " + obj[key]);
                $("#divProductData").append(txt);
                console.log(key +": " + obj[key]);

            }
            $('#divProductData').css('display', 'block');
            
        });

});

