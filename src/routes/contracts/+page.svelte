<script>
    export let data;
    const { currentTeam, teamsToGoogleSheetTabGids, currentGIDForGoogleSheetUrl, googleIframeSrclUrl } = data;
</script>

<style>
    #main {
        position: relative;
        z-index: 1;
        display: block;
        margin: 30px auto;
		width: 95%;
		max-width: 1000px;
        overflow-y: hidden;
    }

	.loading {
		display: block;
		position: relative;
		z-index: 1;
		width: 85%;
		max-width: 500px;
		margin: 80px auto;
	}
</style>

<div id="main">
    <!-- {#await waitForAll(transactionsData, playersData, leagueTeamManagersData)}
        <div class="loading" >
            <p>Loading league transactions...</p>
            <LinearProgress indeterminate />
        </div>
    {:then [{transactions, currentTeams, stale}, playersInfo, leagueTeamManagers]}
        <TransactionsPage {playersInfo} {stale} {transactions} {currentTeams} {show} {query} queryPage={page} {perPage} postUpdate={true} {leagueTeamManagers} />
    {:catch error}
        <p class="center">Something went wrong: {error.message}</p>
    {/await} -->
    <div style="width: 100%; height: 1660px;">
        {#await googleIframeSrclUrl}
            loadConfigFromFile...
        {:then googleIframeSrclUrl}
            <iframe style="width: 100%; height: 100%;" title="DFFL Contracts" src={googleIframeSrclUrl}></iframe>
        {:catch error}
        <h1>
            Something went wrong: {error.message}
        </h1>
        {/await}

    </div>
</div>
