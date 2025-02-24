<script>
  import TClogo from "../../assets/TC logo.png"
  import InnovateX from "../../assets/innovateX.png"
  import DevSolutions from "../../assets/devSolutions.jpg"
  import CodeCrafters from "../../assets/codeCrafters.png"
  import CloudNet from "../../assets/cloudNet.jpg"
  import NextGenAI from "../../assets/nextgenAI.png"
  const sponsors = {
      Gold: [
          { name: "TechCorp", logo: TClogo, link: "https://techcorp.com" },
          { name: "InnovateX", logo: InnovateX , link: "https://innovatex.com" }
      ],
      Silver: [
          { name: "DevSolutions", logo: DevSolutions, link: "https://devsolutions.com" },
          { name: "CodeCrafters", logo: CodeCrafters, link: "https://codecrafters.com" }
      ],
      Bronze: [
          { name: "CloudNet", logo: CloudNet, link: "https://cloudnet.com" },
          { name: "NextGen AI", logo:NextGenAI , link: "https://nextgenai.com" }
      ]
  };
</script>

<section class="sponsors-page p-5">
    <div class="text-center">
        <h2 class="sponsors-title">Our Sponsors</h2>
        <p class="sponsors-subtitle">We thank our incredible sponsors for their support!</p>
    </div>

    {#each Object.entries(sponsors) as [tier, tierSponsors]}
        <div class="sponsor-tier">
            <h3 class="{tier.toLowerCase()}-tier">{tier} Sponsors</h3>
            <div class="sponsor-list">
                {#each tierSponsors as sponsor}
                    <a href={sponsor.link} target="_blank" class="sponsor-card">
                        <img src={sponsor.logo} alt="{sponsor.name} Logo" class="sponsor-logo" />
                    </a>
                {/each}
            </div>
        </div>
    {/each}
</section>

<style>
  .sponsors-page {
      max-width: 900px;
      margin: auto;
      margin-top: 20px;
      background: #f8f9fa;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
  }

  .sponsors-title {
      font-size: 36px;
      font-weight: bold;
      color: #343a40;
  }

  .sponsors-subtitle {
      font-size: 18px;
      color: #6c757d;
      margin-bottom: 20px;
  }

  .sponsor-tier {
      margin-top: 30px;
      text-align: center;
  }

  .gold-tier {
      color: #FFD700;
  }

  .silver-tier {
      color: #C0C0C0;
  }

  .bronze-tier {
      color: #CD7F32;
  }

  .sponsor-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin-top: 15px;
  }

  .sponsor-card {
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
  }

  .sponsor-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .sponsor-logo {
    /* width: max-content; */
      max-width: 150px;
      max-height: 60px;
      object-fit: contain;
  }

  .sponsor-name {
      font-size: 16px;
      font-weight: bold;
      color: #343a40;
  }

  @media (max-width: 768px) {
      .sponsor-list {
          flex-direction: column;
          align-items: center;
      }

      .sponsor-card {
          width: 200px;
      }
  }
</style>
