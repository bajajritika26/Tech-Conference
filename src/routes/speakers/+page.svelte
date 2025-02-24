<script>
    import person1 from "../../assets/person1.jpg";
    import person2 from "../../assets/person2.jpg";
    import person3 from "../../assets/person3.jpg";

    const speakers = [
        {
            name: "John Doe",
            title: "AI Expert",
            img: person1,
            bio: "Expert in AI & Machine Learning with 15 years of experience.",
        },
        {
            name: "Jane Smith",
            title: "Cybersecurity Analyst",
            img: person2,
            bio: "Leading cybersecurity specialist protecting global enterprises.",
        },
        {
            name: "Alan Turing",
            title: "Computer Scientist",
            img: person3,
            bio: "Pioneer of modern computing and AI research.",
        },
        {
            name: "Ada Lovelace",
            title: "Mathematician",
            img: person1,
            bio: "First computer programmer and innovator in analytics.",
        },
        {
            name: "Elon Musk",
            title: "Tech Entrepreneur",
            img: person2,
            bio: "Founder of SpaceX, Tesla, and Neuralink, driving innovation.",
        },
        {
            name: "Grace Hopper",
            title: "Software Engineer",
            img: person3,
            bio: "Revolutionized programming languages and software development.",
        },
        {
            name: "Elon Musk",
            title: "Tech Entrepreneur",
            img: person2,
            bio: "Founder of SpaceX, Tesla, and Neuralink, driving innovation.",
        },
        {
            name: "Grace Hopper",
            title: "Software Engineer",
            img: person3,
            bio: "Revolutionized programming languages and software development.",
        },
    ];
</script>

<section class="speakers-section">
    <div class="text-center">
        <h2 class="speakers-title">Meet Our Speakers</h2>
        <p class="speakers-subtitle">
            Industry leaders and visionaries sharing their insights at the Tech
            Conference.
        </p>
    </div>

    <!-- Speakers Grid -->
    <div class="speakers-container">
        {#each speakers as { name, title, img, bio }}
            <div class="speaker-card">
                <div class="image-container">
                    <img src={img} alt={name} class="speaker-img" />
                </div>
                <div class="text-center">
                    <p class="speaker-name">{name}</p>
                    <p class="speaker-title">{title}</p>
                    <p class="speaker-bio">{bio}</p>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .speakers-section {
        background: #fdfdfd;
        padding: 50px 20px;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        max-width: 1200px;
        margin: auto;
        text-align: center;
        margin-top: 20px;
    }

    .speakers-title {
        font-size: 36px;
        font-weight: 700;
        color: #222;
        margin-bottom: 10px;
    }

    .speakers-subtitle {
        font-size: 18px;
        color: #555;
        margin-bottom: 40px;
    }

    .speakers-container {
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
        justify-content: center;
    }

    .speaker-card {
        width: 220px;
        height: 420px;
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition:
            transform 0.3s ease-in-out,
            box-shadow 0.3s ease-in-out;
        background: white;
    }

    .speaker-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }

    /* Image Container */
    .image-container {
        width: 100%;
        height: 250px;
        overflow: hidden;
        background: #f1f1f1;
    }

    .speaker-img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        object-position: center;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }

    /* Speaker Info */
    .speaker-name {
        font-size: 20px;
        font-weight: bold;
        margin-top: 12px;
        color: #333;
    }

    .speaker-title {
        font-size: 16px;
        font-weight: 500;
        color: #007bff;
        margin-top: 5px;
    }

    .speaker-bio {
        font-size: 14px;
        color: #666;
        padding: 10px;
        line-height: 1.5;
    }

    /* Responsive Adjustments */
    @media (max-width: 768px) {
        .speakers-container {
            flex-direction: column;
            align-items: center;
        }

        .speaker-card {
            width: 90%;
            height: auto;
        }
        .speaker-img {
            height: 200px;
        }
    }
</style>
