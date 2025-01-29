//for sale
        document.addEventListener("DOMContentLoaded", function () {
            const quickViewSwitch = document.getElementById("quickViewSwitch");
            const products = document.querySelectorAll(".product");
            
            quickViewSwitch.addEventListener("change", function () {
                products.forEach((product) => {
                    product.classList.toggle("quick-view-active", quickViewSwitch.checked);
                });
            });

            products.forEach((product) => {
                const quickViewBtn = product.querySelector(".btn-quick-view");
                const discoverBtn = product.querySelector(".btn-discover");

                quickViewBtn.addEventListener("click", function () {
                    product.classList.add("quick-view-active");
                });

                discoverBtn.addEventListener("click", function () {
                    product.classList.remove("quick-view-active");
                });
            });
        });
