<script>
    import logo from "../../assets/logo.webp";
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<nav class="navbar">
    <div class="nav-container">
        <!-- Logo on the Left -->
         <!-- eslint-disable-next-line  -->
        <a href="/" class="brand">
            <img src={logo} class="navLogo" alt="" />
        </a>

        <!-- Hamburger Menu for Mobile -->
        <button class="menu-btn" on:click={toggleMenu}> ☰ </button>

        <!-- Navigation Links (Aligned to Right) -->
        <ul class="nav-links {isMenuOpen ? 'open' : ''}">
            <li><a href="/about">About</a></li>
            <li><a href="/sponsors">Sponsors</a></li>
            <li><a href="/speakers">Speakers</a></li>
            <li><a href="/schedule">Schedule</a></li>
            <li><a href="/contact">Contact</a></li>
            <li>
            </li>
        </ul>
    </div>
</nav>

<style>
    .navbar {
        /* width: 100%; */
        padding: 15px 20px;
        transition:
            background-color 0.3s,
            color 0.3s;
    }

    .nav-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    /* Logo */
    .brand img {
        height: 50px;
    }

    .nav-links {
        display: flex;
        list-style: none;
        gap: 20px;
        /* margin-left: auto; */
        align-items: center;
    }

    .nav-links a {
        text-decoration: none;
        font-weight: 500;
        color: inherit;
    }

    .nav-links a:hover {
        text-decoration: underline;
    }

    .menu-btn {
        display: none;
        font-size: 24px;
        background: none;
        border: none;
        cursor: pointer;
        color: white;
    }

    
 
    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
        .menu-btn {
            display: block;
        }

        /* Hide Links in Mobile View */
        .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 60px;
            right: 0;
            background-color: inherit;
            width: 100%;
            padding: 10px;
        }

        /* Show Links When Menu is Open */
        .nav-links.open {
            display: flex;
        }
    }
</style>
