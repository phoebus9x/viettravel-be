// ============= sidebar start ============= // 
const sidebarEvent = document.getElementById('sidebarEvent');
const sidebar = document.querySelector('.sidebar');
sidebarEvent.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar-toggle');
});

const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar-toggle');
});
// ============= sidebar end ============= //

// ============= counter start ============= //
(function(e) {
    "use strict";
    e.fn.counterUp = function(t) {
        const n = e.extend({
            time: 400,
            delay: 10
        }, t);

        return this.each(function() {
            const t = e(this);
            const r = n;

            function incrementValue() {
                const nums = [];
                const duration = r.time / r.delay;
                let value = t.text();
                const hasCommas = /[0-9]+,[0-9]+/.test(value);
                value = value.replace(/,/g, "");
                const isNumber = /^[0-9]+$/.test(value);
                const isFloat = /^[0-9]+\.[0-9]+$/.test(value);
                const decimalPlaces = isFloat ? (value.split(".")[1] || []).length : 0;

                for (let i = duration; i >= 1; i--) {
                    let newValue = parseInt(value / duration * i);
                    if (isFloat) {
                        newValue = parseFloat(value / duration * i).toFixed(decimalPlaces);
                    }
                    if (hasCommas) {
                        while (/(\d+)(\d{3})/.test(newValue.toString())) {
                            newValue = newValue.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        }
                    }
                    nums.unshift(newValue);
                }

                t.data("counterup-nums", nums);
                t.text("0");

                function updateValue() {
                    t.text(t.data("counterup-nums").shift());
                    if (t.data("counterup-nums").length) {
                        setTimeout(updateValue, r.delay);
                    } else {
                        t.removeData("counterup-nums");
                    }
                }

                t.data("counterup-func", updateValue);
                setTimeout(t.data("counterup-func"), r.delay);
            }

            t.waypoint(incrementValue, {
                offset: "100%",
                triggerOnce: true
            });
        });
    };
})(jQuery);

jQuery(document).ready(function($) {
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });
});
// ============= counter end ============= //

// ============= button back to top start ============= //
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    const scrollToTopBtn = document.documentElement || document.body;
    scrollToTopBtn.scrollIntoView({
        behavior: "smooth"
    });
}
// ============= button back to top end ============= //


// ============= logoipsum slider section ============= //
$('.logoipsum-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 5,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});

// ============= logoipsum slider section end ============= //

// ============= about validation start ============= //
const aboutForm = document.getElementById('about-form');
const aboutMessage = document.getElementById('about-message');
if (aboutForm !== null) {
    aboutForm.addEventListener('submit', function(event) {
        event.preventDefault();
        aboutMessage.innerHTML = 'Form submitted successfully!';
        aboutMessage.style.display = 'block';
        aboutForm.reset();
        setTimeout(function() {
            aboutMessage.style.display = 'none';
        }, 3000);
    });
}
// ============= about validation end ============= //


// ============= newsletter validation start start ============= //
const form = document.getElementById('newsletter-form');
const successMessage = document.getElementById('newsletter-message');
if (form !== null) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        successMessage.innerHTML = 'Form submitted successfully!';
        successMessage.style.display = 'block';
        form.reset();
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 3000);
    });
}
// ============= newsletter validation start end ============= //

// ============= contact form validation start ============= //
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
if (contactForm !== null) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        contactMessage.innerHTML = 'Form submitted successfully!';
        contactMessage.style.display = 'block';
        contactMessage.style.visibility = 'visible';
        contactForm.reset();
        setTimeout(function() {
            contactMessage.style.display = 'none';
        }, 3000);
    });
}
// ============= contact form validation end ============= //
