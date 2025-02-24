<script>
    let schedule = [
        {
            date: "March 1, 2025",
            time: "09:00 AM",
            event: "Opening Ceremony",
            track: "General",
            speaker: "John Doe",
        },
        {
            date: "March 5, 2025",
            time: "10:00 AM",
            event: "Keynote Speech",
            track: "Keynote",
            speaker: "Jane Smith",
        },
        {
            date: "March 10, 2025",
            time: "11:30 AM",
            event: "AI & Machine Learning",
            track: "AI & ML",
            speaker: "Dr. Alan Turing",
        },
        {
            date: "March 15, 2025",
            time: "01:00 PM",
            event: "Lunch Break",
            track: "Break",
            speaker: "N/A",
        },
        {
            date: "March 16, 2025",
            time: "02:30 PM",
            event: "Cybersecurity Trends",
            track: "Cybersecurity",
            speaker: "Edward Snowden",
        },
        {
            date: "March 19, 2025",
            time: "04:00 PM",
            event: "Panel Discussion",
            track: "General",
            speaker: "Industry Experts",
        },
        {
            date: "March 31, 2025",
            time: "05:30 PM",
            event: "Closing Remarks",
            track: "General",
            speaker: "Event Organizers",
        },
    ];

    let selectedDate = "All";
    let selectedTrack = "All";

    $: filteredSchedule = schedule.filter(
        (session) =>
            (selectedDate === "All" || session.date === selectedDate) &&
            (selectedTrack === "All" || session.track === selectedTrack),
    );

    let uniqueDates = [
        "All",
        ...new Set(schedule.map((session) => session.date)),
    ];
    let uniqueTracks = [
        "All",
        ...new Set(schedule.map((session) => session.track)),
    ];
</script>

<section class="container py-5">
    <div class="text-center mb-4">
        <h2 class="fw-bold">Event Schedule</h2>
        <p class="para">
            Stay tuned for an exciting lineup of talks and discussions!
        </p>
    </div>

    <div class="filters d-flex flex-column mb-4">
        <div class=" text-center mb-3">
            <span class="fw-bold me-2">Filter by Date:</span>
            {#each uniqueDates as date}
                <button
                    class="btn btn-sm me-2 {selectedDate === date
                        ? 'btn-primary'
                        : 'btn-secondary'}"
                    on:click={() => (selectedDate = date)}
                >
                    {date}
                </button>
            {/each}
        </div>
        <div class=" text-center">
            <span class="fw-bold me-2">Filter by Track:</span>
            {#each uniqueTracks as track}
                <button
                    class="btn btn-sm me-2 {selectedTrack === track
                        ? 'btn-primary'
                        : 'btn-secondary'}"
                    on:click={() => (selectedTrack = track)}
                >
                    {track}
                </button>
            {/each}
        </div>
    </div>

    <div class="table-responsive">
        <table class="table table-bordered table-hover text-center">
            <thead class="table-dark">
                <tr>
                    <th class="tableItem">Date</th>
                    <th class="tableItem">Time</th>
                    <th class="tableItem">Event</th>
                    <th class="tableItem">Track</th>
                    <th class="tableItem">Speaker</th>
                </tr>
            </thead>
            <tbody>
                {#each filteredSchedule as { date, time, event, track, speaker }}
                    <tr>
                        <td class="tableItem">{date}</td>
                        <td class="tableItem">{time}</td>
                        <td class="tableItem">{event}</td>
                        <td class="tableItem">{track}</td>
                        <td class="tableItem">{speaker}</td>
                    </tr>
                {:else}
                    <tr>
                        <td colspan="5" class="text-center"
                            >No sessions found.</td
                        >
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</section>

<style>
    .para {
        color: gray;
    }
    .filters {
        justify-content: left;
        align-items: start;
    }
   
    .filters button{
        margin-top: 10px;
    }
    .tableItem {
        padding: 20px;
    }
    @media (max-width: 768px) {
        .table-responsive {
            overflow-x: auto;
        }

        .filters span {
            font-size: 10px;
        }
        .tableItem {
            padding: 5px;
            font-size: 10px;
        }
        .btn-sm {
            font-size: 10px;
            padding: 5px 8px;
        }
    }
</style>
