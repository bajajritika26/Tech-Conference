<script>
  import person1 from "../../assets/person1.jpg";
  import person2 from "../../assets/person2.jpg";
  import person3 from "../../assets/person3.jpg";

  export let speakers = [
    {
      name: "Dr. Jane Smith",
      title: "AI Researcher, Google",
      image: person1,
    },
    {
      name: "Jenea Doe",
      title: "CTO, Tech Innovations",
      image: person2,
    },
    {
      name: "John David",
      title: "Cybersecurity Expert, IBM",
      image: person3,
    },
  ];
</script>

<section class="speakers-section">
  <h2 class="section-title text-light">Meet Our Keynote Speakers</h2>
  <div class="speakers-grid">
    {#each speakers as speaker}
      <div class="speaker-card">
        <img src={speaker.image} alt={speaker.name} class="speaker-img" />
        <h3 class="speaker-name">{speaker.name}</h3>
        <p class="speaker-title">{speaker.title}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .speakers-section {
    padding: 80px 40px;
    text-align: center;
    color: rgb(6, 6, 48);
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 40px;
    font-weight: semibold;
  }

  .speakers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 50px;
    justify-content: center;
  }

  .speaker-card {
    background: lightgray;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .speaker-img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 30px;
  }

  .speaker-name {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .speaker-title {
    font-size: 1rem;
  }
</style>
