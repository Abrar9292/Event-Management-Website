document.addEventListener("DOMContentLoaded", function () {

    /* FILTER */

    const filterButtons = document.querySelectorAll(".filter-btn");
    const eventItems = document.querySelectorAll(".event-item");

    filterButtons.forEach((button) => {

        button.addEventListener("click", function () {

            filterButtons.forEach((btn) => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            eventItems.forEach((item) => {

                const category = item.getAttribute("data-category");

                if (filterValue === "all" || filterValue === category) {

                    item.style.display = "block";
                    item.style.animation = "fadeIn 0.6s ease";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });

    /* COUNTER */

    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {

        counter.innerText = "0";

        const target = Number(counter.getAttribute("data-target"));

        const increment = Math.ceil(target / 60);

        function updateCounter() {

            const current = Number(counter.innerText);

            if (current < target) {

                counter.innerText = current + increment;

                setTimeout(updateCounter, 30);

            } else {

                counter.innerText = target + "+";

            }

        }

        updateCounter();

    });

    /* BOOKING FORM */

    const bookingForm = document.getElementById("eventBookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const submitBtn = document.querySelector(".neon-submit-btn");

            submitBtn.innerHTML = "Submitting...";

            setTimeout(() => {

                alert("Event Booking Submitted Successfully!");

                bookingForm.reset();

                submitBtn.innerHTML = "Submit Booking";

            }, 1500);

        });

    }

});

/* ANIMATION */

const style = document.createElement("style");

style.innerHTML = `
@keyframes fadeIn{
    from{
        opacity:0;
        transform:translateY(20px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}
`;

document.head.appendChild(style);