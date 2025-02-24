<script>
  import facebook from "../../assets/facebook.png";
  import linkedIn from "../../assets/linkedin-logo.png";
  import instagram from "../../assets/instagram.png";
  import twitter from "../../assets/twitter.png";

  let currentYear = new Date().getFullYear();
</script>

<footer class=" text-light pt-2 mt-4">
  <div class="container pt-5 pb-2">
    <div class="row g-4 justify-content-between align-items-start">
      <div class="col-md-2">
        <h5 class="fw-bold text-uppercase">Quick Links</h5>
        <ul class="list-unstyled mt-3">
          <li class="mb-2">
            <a href="/home" class="text-secondary text-decoration-none">Home</a>
          </li>
          <li class="mb-2">
            <a href="/speakers" class="text-secondary text-decoration-none"
              >Speakers</a
            >
          </li>
          <li class="mb-2">
            <a href="/schedule" class="text-secondary text-decoration-none"
              >Schedule</a
            >
          </li>
          <li class="mb-2">
            <a href="/contact" class="text-secondary text-decoration-none"
              >Contact</a
            >
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="col-md-3">
        <h5 class="fw-bold text-uppercase">Contact</h5>
        <p class="small text-secondary mt-3 mb-2">info@techconference.com</p>
        <p class="small text-secondary">
          <i class="bi bi-telephone-fill"></i> +1 234 567 890
        </p>
      </div>

      <!-- Social Media -->
      <div class="col-md-3 text-center">
        <h5 class="fw-bold text-uppercase">Follow Us</h5>
        <div class="d-flex justify-content-center gap-3 mt-3">
          <a href="https://www.facebook.com/" class="text-light"
            ><img src={facebook} alt="Facebook" class="social-icon" /></a
          >
          <a href="https://www.twitter.com/" class="text-light"
            ><img src={twitter} alt="Twitter" class="social-icon" /></a
          >
          <a href="https://www.linkedin.com/" class="text-light"
            ><img src={linkedIn} alt="LinkedIn" class="social-icon" /></a
          >
          <a href="https://www.instagram.com/" class="text-light"
            ><img src={instagram} alt="Instagram" class="social-icon" /></a
          >
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center text-secondary small mt-5">
      &copy; {currentYear} Tech Conference. All Rights Reserved.
    </div>
  </div>
</footer>

<style>
  .social-icon {
    width: 25px;
    height: 25px;
    transition: transform 0.3s ease-in-out;
  }

  .social-icon:hover {
    transform: scale(1.1);
  }

  footer {
    border-top: 2px solid rgba(204, 200, 200, 0.1);
  }
</style>
