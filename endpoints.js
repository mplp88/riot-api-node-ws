module.exports = {
    champion: {
        freeChampionRotation: '/lol/platform/v3/champion-rotations'
    },
    championMastery: {
        allChampionMasteriesSummonerId: '/lol/champion-mastery/v3/champion-masteries/by-summoner/{summonerId}',
        championMasteryBySummonerIdChampionId: '/lol/champion-mastery/v3/champion-masteries/by-summoner/{summonerId}/by-champion/{championId}',
        scoresBySummonerId: '/lol/champion-mastery/v3/scores/by-summoner/{summonerId}'
    },
    league: {
        positionsBySummonerId: '/lol/league/v3/positions/by-summoner/{summonerId}',
        challengerLeaguesByQueue: '/lol/league/v3/challengerleagues/by-queue/{queue}',
        masterLeaguesByQueue: '/lol/league/v3/masterleagues/by-queue/{queue}',
        byLeagueId: '/lol/league/v3/leagues/{leagueId}'
    },
    lolStatus:{
        shardData: '/lol/status/v3/shard-data'
    },
    match: {
        matchListByAccountId: '/lol/match/v3/matchlists/by-account/{accountId}',
        byMatchId: '/lol/match/v3/matches/{matchId}',
        timelineByMatchId: '/lol/match/v3/timelines/by-match/{matchId}',
        matchesByTournamentCode: '/lol/match/v3/matches/by-tournament-code/{tournamentCode}/ids',
        matchByMatchIdTournamentCode: '/lol/match/v3/matches/{matchId}/by-tournament-code/{tournamentCode}'
    },
    spectator: {
        activeGameBySummonerId: '/lol/spectator/v3/active-games/by-summoner/{summonerId}',
        featuredGames: '/lol/spectator/v3/featured-games'
    },
    summoner: {
        byAccount: '/lol/summoner/v3/summoners/by-account/{accountId}',
        byName: '/lol/summoner/v3/summoners/by-name/{summonerName}',
        bySummonerId: '/lol/summoner/v3/summoners/{summonerId}'
    }
}