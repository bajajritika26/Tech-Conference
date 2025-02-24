<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import Navbar from "../lib/components/Navbar.svelte";
  import Footer from "../lib/components/Footer.svelte";
</script>

<section class="page-container">
  <Navbar />
  <slot />
  <Footer />
</section>

<style>
  .page-container {
    padding: 20px;
    text-align: center;
    font-family: "Poppins", sans-serif;
    transition:
      background-color 0.3s,
      color 0.3s;
    background-color: rgb(6, 6, 48);
    color: whitesmoke;
  }
</style>
