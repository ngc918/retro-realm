const router = require("express").Router();
const axios = require("axios");
const { application } = require("express");

/* GET home page */
// router.get("/", (req, res, next) => {
// 	axios({
// 		url: "https://api.igdb.com/v4/games",
// 		method: "POST",
// 		headers: {
// 			Accept: "application/json",
// 			"Client-ID": "t4hwthrv9ka93t92dd4nlj4gm339nn",
// 			Authorization: `Bearer ${process.env.access_token}`,
// 		},
// 		data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;",
// 	})
// 		.then((response) => {
// 			console.log(response.data);
// 			res.render("index", { games: response.data });
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 		});
// });

router.get("/", (req, res, next) => {
	axios({
		url: "https://api.igdb.com/v4/artworks",
		method: "POST",
		headers: {
			Accept: "application/json",
			"Client-ID": "t4hwthrv9ka93t92dd4nlj4gm339nn",
			Authorization: `Bearer ${process.env.access_token}`,
		},
		data: "fields name, summary, cover.url;",
	})
		.then((response) => {
			console.log(response.data);
			res.render("index", { games: response.data });
		})
		.catch((err) => {
			console.error(err);
		});
});

module.exports = router;
