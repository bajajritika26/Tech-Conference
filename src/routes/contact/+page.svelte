<script>
    import facebook from "../../assets/facebook-dark.png";
    import linkedIn from "../../assets/linkedin-dark.png";
    import instagram from "../../assets/instagram-dark.png";
    import twitter from "../../assets/twitter-dark.png";
    let name = "";
    let email = "";
    let message = "";
</script>

<section
    class="contact-section p-5 d-flex flex-column flex-lg-row justify-content-center align-items-center"
>
    <!-- Left Side - Contact Information -->
    <div class="contact-info text-center text-lg-start p-4">
        <h2 class="contact-title">Get in Touch</h2>
        1
        <p class="contact-text">
            Have questions? Reach out to us and we'll be happy to assist you!
        </p>
        <div class="contact-details mt-3">
            <p><strong>Email:</strong> info@techconference.com</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Location:</strong> 123 Conference Ave, Tech City</p>
        </div>

        <!-- Social Media Links -->
        <div class="social-links mt-3">
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

    <!-- Right Side - Contact Form -->
    <div class="contact-form p-4">
        <form>
            <div>
                <label for="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Enter your name"
                    required
                />
            </div>

            <div>
                <label for="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Enter your email"
                    required
                />
            </div>

            <div>
                <label for="message">Your Message</label>
                <textarea
                    id="message"
                    class="form-control input-style-msg"
                    rows="4"
                    placeholder="Type your message..."
                    bind:value={message}
                    required
                ></textarea>
            </div>

            <button
                class="btn btn-lg mt-3 w-100 rounded p-2 bg-primary text-light"
                >Send Message</button
            >
        </form>
    </div>
</section>

<style>
    .contact-section {
        background: #f8f9fa;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        max-width: 900px;
        margin: auto;
        margin-top: 20px;
    }

    .contact-title {
        font-size: 32px;
        font-weight: bold;
        color: black;
    }

    .contact-text {
        font-size: 18px;
        color: black;
    }
    .contact-details p {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .contact-form {
        width: 100%;
        max-width: 400px;
    }

    .input-style-msg {
        height: 100px;
        border-radius: 5px;
        border: 1px solid #ced4da;
        padding: 10px;
        font-size: 16px;
    }

    .social-links {
        margin-top: 10px;
        display: flex;
        gap: 15px;
    }

    .social-icon {
        color: #007bff;
        text-decoration: none;
        font-weight: bold;
        height: 24px;
    }

    .social-icon:hover {
        text-decoration: underline;
    }

    @media (max-width: 991px) {
        .contact-section {
            flex-direction: column;
            text-align: center;
        }

        .contact-info,
        .contact-form {
            padding: 20px;
        }
    }
</style>
