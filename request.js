const endpoints = require('./endpoints.js');

const express = require('express');
const router = express.Router();
const request = require('request');
const cors = require('cors');

const host = '.api.riotgames.com';
const apiKey = 'YOU API KEY HERE';

router.use(cors());

router.get('/', function(req, res){
    res.send('<h1>Api is working</h1>');
});

// Endpoints Start
// Champion Rotation
router.get('/Champions/FreeChampionRotation/:region', function (req, res) {
    var region = req.params.region;

    var uri = getUri(region, endpoints.champion.freeChampionRotation);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

// Champion Mastery
router.get('/ChampionMastery/GetAllChampionMateriesBySummonerId/:region/:summonerId', function (req, res) {
    var summonerId = req.params.summonerId;
    var region = req.params.region;

    var params = {
        'summonerId': summonerId
    };

    var uri = getUri(region, endpoints.championMastery.allChampionMasteriesSummonerId, params);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

router.get('/ChampionMastery/GetChampionMateryBySummonerIdChampionId/:region/:summonerId/:championId', function (req, res) {
    var summonerId = req.params.summonerId;
    var championId = req.params.championId;
    var region = req.params.region;

    var params = {
        'summonerId': summonerId,
        'championId': championId
    };

    var uri = getUri(region, endpoints.championMastery.championMasteryBySummonerIdChampionId, params);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

router.get('/ChampionMastery/GetScoresBySummonerId/:region/:summonerId', function (req, res) {
    var summonerId = req.params.summonerId;
    var region = req.params.region;

    var params = {
        'summonerId': summonerId
    };

    var uri = getUri(region, endpoints.championMastery.scoresBySummonerId, params);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

// Leagues
router.get('/Leagues/GetPositionsBySummonerId/:region/:summonerId', function (req, res) {
    var summonerId = req.params.summonerId;
    var region = req.params.region;

    var params = {
        'summonerId': summonerId
    };

    var uri = getUri(region, endpoints.league.positionsBySummonerId, params);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

router.get('/Leagues/GetLeagueByLeagueId/:region/:leagueId', function (req, res) {
    var leagueId = req.params.leagueId;
    var region = req.params.region;

    var params = {
        'leagueId': leagueId
    };

    var uri = getUri(region, endpoints.league.byLeagueId, params);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

router.get('/Leagues/GetMasterLeaguesByQueue/:region/:queue', function (req, res) {
    var queue = req.params.queue;
    var region = req.params.region;

    var params = {
        'queue': queue
    };

    var uri = getUri(region, endpoints.league.masterLeaguesByQueue, params);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

router.get('/Leagues/GetChallengerLeaguesByQueue/:region/:queue', function (req, res) {
    var queue = req.params.queue;
    var region = req.params.region;

    var params = {
        'queue': queue
    };

    var uri = getUri(region, endpoints.league.challengerLeaguesByQueue, params);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

// LoL Status
router.get('/ShardData/GetStatusByRegion/:region', function (req, res) {
    var region = req.params.region;

    var uri = getUri(region, endpoints.lolStatus.shardData);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

// Match
router.get('/Matches/GetMatchListByAccountId/:region/:accountId', function (req, res) {
    var accountId = req.params.accountId;
    var region = req.params.region;

    var params = {
        'accountId': accountId
    };

    var uri = getUri(region, endpoints.match.matchListByAccountId, params);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

router.get('/Matches/GetMatchByMatchId/:region/:matchId', function (req, res) {
    var matchId = req.params.matchId;
    var region = req.params.region;

    var params = {
        'matchId': matchId
    };

    var uri = getUri(region, endpoints.match.byMatchId, params);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

router.get('/Matches/GetTimelineByMatchId/:region/:matchId', function (req, res) {
    var matchId = req.params.matchId;
    var region = req.params.region;

    var params = {
        'matchId': matchId
    };

    var uri = getUri(region, endpoints.match.timelineByMatchId, params);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

// Spectator
router.get('/Spectator/GetActiveGameBySummonerId/:region/:summonerId', function (req, res) {
    var summonerId = req.params.summonerId;
    var region = req.params.region;

    var params = {
        'summonerId': summonerId
    }

    var uri = getUri(region, endpoints.spectator.activeGameBySummonerId, params);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

router.get('/Spectator/GetFeaturedGamesByRegion/:region', function (req, res) {
    var region = req.params.region;

    var uri = getUri(region, endpoints.spectator.featuredGames);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

// Summoners
router.get('/Summoners/GetSummonerByName/:region/:summonerName', function (req, res) {
    var summonerName = req.params.summonerName;
    var region = req.params.region;

    var params = {
        'summonerName': summonerName
    };

    var uri = getUri(region, endpoints.summoner.byName, params);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

router.get('/Summoners/GetSummonerBySummonerId/:region/:summonerId', function (req, res) {
    var summonerId = req.params.summonerId;
    var region = req.params.region;

    var params = {
        'summonerId': summonerId
    };

    var uri = getUri(region, endpoints.summoner.byId, params);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

router.get('/Summoners/GetSummonerByAccountId/:region/:accountId', function (req, res) {
    var accountId = req.params.accountId;
    var region = req.params.region;

    var params = {
        'accountId': accountId
    };

    var uri = getUri(region, endpoints.summoner.byAccount, params);
    var headers = setHeaders();

    request({
        headers: headers,
        uri: uri
    }).pipe(res);
});

// Endpoints End

function getUri(region, endpoint, params) {
    var ret = 'https://' + region + host + endpoint;

    for (var param in params) {
        ret = ret.replace(new RegExp('{' + param + '}', 'gi'), params[param]);
    }
    return ret;
}

function setHeaders() {
    var headers = {
        'X-Riot-Token': getApiKey(),
        'Accept': 'application/json'
    }

    return headers;
}

function getApiKey(){
    return apiKey;
}

module.exports = router;