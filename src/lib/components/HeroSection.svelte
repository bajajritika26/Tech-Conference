<script>
    import man from "../../assets/man.png";
</script>

<section class="hero-section  d-flex flex-column flex-lg-row justify-content-between align-items-center text-center text-lg-start ">
    <!-- Left Content -->
    <div class="hero-content p-4 ">
        <h1 class="hero-head fw-bold mb-4">Tech Conference Hub</h1>
        <p class="hero-para mb-4">
            Your Ultimate Destination to <strong>Innovate, Connect, and Elevate</strong>  
            the Future of Technology with Industry Leaders, Visionary Speakers,  
            and Cutting-Edge Insights!
        </p>
        <button color="primary" class="btn bg-primary text-light btn-lg px-4">Register Now</button>
    </div>

    <!-- Right Image -->
    <div class="">
        <img alt="Tech Conference" src={man} class="hero-image "/>
    </div>
</section>

<style>
    .hero-section {
        color: white;
    }
    
    .hero-head {
        font-size: 55px;
    }

    .hero-para {
        font-size: 18px;
        line-height: 1.6;
        max-width: 600px;
        margin: auto;
    }

    .hero-image {
        max-width: 100%;
        height: auto;
        max-height: 500px;
    }

    @media (max-width: 991px) {
        .hero-section {
            text-align: center;
        }

        .hero-content {
            padding: 20px;
        }

        .hero-head {
            font-size: 40px;
        }

        .hero-para {
            font-size: 16px;
        }
    }
</style>
