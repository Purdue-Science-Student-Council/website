<?php include("partials/header.php") ?>
    <main class="main-container">
        <div class="page">
        
            <h1 class="page-title">Contact Us</h1>
            <hr class="page-divider">

            <p class="page-text">
                Have a question, message or suggestion? Send us an
                <a class="page-text-a" href="mailto:purduesciencecouncil@gmail.com">email</a>, or just fill in the form below.
            </p>
            
            <div class="page-contact">
                <!-- action script located in webmaster folder in google drive -->
                <form id="gform" class="page-contact-form" method="POST" action="https://script.google.com/macros/s/AKfycbziIpx7Hj6QaPB9JeDu8dGxSAcZoEhMV52FTwZuc57SImEeBKLe/exec">
                    <div class="page-contact-form-element">
                        <label for="first_name" class="page-contact-form-element-label"> Your Full Name </label>
                        <input id="full_name" type="text" name="fullName" class="page-contact-form-element-input">
                    </div>
                    
                    <div class="page-contact-form-element">
                        <label for="email" data-error="please enter an email" data-success="" class="page-contact-form-element-label">Your Email</label>
                        <input id="email" type="email" name="email" class="page-contact-form-element-input">
                    </div>

                    <div class="page-contact-form-element">
                        <label for="textarea1"  class="page-contact-form-element-label">Your Message</label>
                        <textarea id="textarea1" name="message" class="page-contact-form-element-textarea"></textarea>
                    </div>

                    <div class="page-contact-form-element">
                        <button type="submit" class="page-contact-form-element-button">Send</button>
                    </div>
                </form>
            </div>
        </div>
        <script src="js/landing.js"></script>
        <!-- <script src="js/contact.js"></script> -->
    </main>
<?php include("partials/footer.php") ?>