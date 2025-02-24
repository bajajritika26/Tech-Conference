<script>
    import { onMount } from 'svelte';

    let schedule = [
        { date: "March 1, 2025", time: "09:00 AM", event: "Opening Ceremony", track: "General", speaker: "John Doe" },
        { date: "March 5, 2025", time: "10:00 AM", event: "Keynote Speech", track: "Keynote", speaker: "Jane Smith" },
        { date: "March 10, 2025", time: "11:30 AM", event: "AI & Machine Learning", track: "AI & ML", speaker: "Dr. Alan Turing" },
        { date: "March 15, 2025", time: "01:00 PM", event: "Lunch Break", track: "Break", speaker: "N/A" },
        { date: "March 16, 2025", time: "02:30 PM", event: "Cybersecurity Trends", track: "Cybersecurity", speaker: "Edward Snowden" },
        { date: "March 19, 2025", time: "04:00 PM", event: "Panel Discussion", track: "General", speaker: "Industry Experts" },
        { date: "March 31, 2025", time: "05:30 PM", event: "Closing Remarks", track: "General", speaker: "Event Organizers" },
    ];

    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    /* eslint-disable-next-line */ 
    let recentEvent, nextTwoEvents;
    
    function getUpcomingEvents() {
        const now = new Date();
        let upcoming = schedule
            .map(event => ({
                ...event,
                dateTime: new Date(`${event.date} ${event.time}`)
            }))
            .filter(event => event.dateTime > now);

        recentEvent = upcoming[0] || null; // First upcoming event
        nextTwoEvents = upcoming.slice(1, 3); // Second & third upcoming events
    }

    function updateCountdown() {
        /* eslint-disable-next-line */ 
        if (!recentEvent) return;
        const targetDate = new Date(`${recentEvent.date} ${recentEvent.time}`);

        const interval = setInterval(() => {
            const now = new Date();
            /* eslint-disable-next-line */ 
            const difference = targetDate - now;

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            } else {
                clearInterval(interval);
                getUpcomingEvents(); // Update to next event when countdown finishes
                updateCountdown(); 
            }
        }, 1000);
    }

    onMount(() => {
        getUpcomingEvents();
        updateCountdown();
    });

    $: getUpcomingEvents();
</script>

  
  <style>
.count-container {
    padding: 20px;
    margin-top: 30px;
    text-align: left;
    color: rgb(6, 6, 48);
}

.count-container h1 {
    margin-bottom: 30px;
    text-align: center;
}

.event-container {
    display: flex;
    gap: 20px;
    /* align-items: flex-start; */
}

.highlight-card {
    flex: 1;
    background: white;
    padding: 1.5rem;
    text-align: left;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.highlight-card h1{
    text-align: left;
}
/* Upcoming Events List */
.upcoming-events {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.event-card {
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Buttons */
.button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: rgb(6, 6, 48);
    border-radius: 15px;
    color: white;
    border: none;
}

@media (max-width: 768px) {
    .event-container {
        flex-direction: column;
        align-items: center;
    }

    .highlight-card {
        width: 100%;
    }

    .upcoming-events {
        width: 100%;
    }
}

  </style>
  
  <div class="count-container  px-6 mx-auto">
    <h1 class="fs-1 fw-bold mb-6 text-white ">Upcoming Community Events</h1>
    
    <!-- Container for Responsive Layout -->
    <div class="event-container">
        
        <div class="highlight-card">
            <h1 class="fw-bold">{recentEvent.event}</h1>
            <p class="text-sm">⏰ {recentEvent.date} | {recentEvent.time}</p>
            <p class="text-sm font-light">Speaker: {recentEvent.speaker}</p>
            <div class="text-lg fs-1 fw-semibold">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>
            <div class="flex space-x-4 mt-4">
                <button class="button">Buy a Ticket</button>
                <button class="button">Sponsor</button>
            </div>
        </div>

        <!-- Other Upcoming Events -->
        <div class="upcoming-events">
            {#each nextTwoEvents as event, index}
                <div class="event-card" key={index}>
                    <p class="fs-4 fw-semibold">{event.event}</p>
                    <p class="">⏰ {event.date} | {event.time}</p>
                    <p class="font-light">Speaker: {event.speaker}</p>
                </div>
            {/each}
        </div>
        
    </div>
</div>

  
