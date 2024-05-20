<template>
  <!-- Page Banner Section Start -->
  <div
    class="ht-page-banner-section-one section"
    data-overlay="cyan-blue"
    data-opacity="5"
    style="background-image: url(/frontend/assets/images/bg/page-banner.jpg)"
  >
    <div class="container">
      <div class="row">
        <div class="ht-page-banner col-12">
          <h1>Contact us</h1>
        </div>
      </div>
    </div>
  </div>
  <!-- Page Banner Section End -->

  <!-- Contact Section Start -->
  <div class="ht-contact-section section position-relative pt-120 pb-120">
    <div class="container">
      <div class="row">
        <!-- Contact Info -->
        <div class="ht-contact-info-one col-lg-6 col-12">
          <h2 class="title">Get In Touch</h2>
          <p>
            If you are going to use a passage of Lorem Ipsum, need to be sure
            there isn't anything embarrassihidden in the middle of text. All the
            Lorem Ipsum
          </p>
          <ul>
            <li><span>Address:</span> Your address goes here.</li>
            <li><span>Phone:</span> 0123456789</li>
            <li><span>Email:</span> demo@example.com</li>
          </ul>

          <!-- Contact Form -->
          <div class="ht-contact-form-one">
            <form
              id="contact-form"
              action="https://whizthemes.com/mail-php/jaber/contact.php"
              method="post"
            >
              <input type="text" name="name" placeholder="Your Name" />
              <input type="email" name="email" placeholder="Email Address" />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea name="message" placeholder="Your Message"></textarea>
              <button type="submit">send massage</button>
            </form>
            <p class="form-messege"></p>
          </div>
        </div>

        <!-- Map -->
        <div class="ht-contact-map-one position-static col-lg-6 col-12">
          <div id="map-one">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.838709675939!2d144.95320007668528!3d-37.817246734238516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1670477011653!5m2!1sen!2sus"
              style="border: 0; width: 100%; height: 100%"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact Section End -->
</template>

<script>
export default {
  name: "Contact-Template",
};
</script>
<style></style>
