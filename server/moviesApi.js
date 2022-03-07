import {Router} from "express";

export function MoviesApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
      const movies = await mongoDatabase.collection("movies")
          .find({
              countries: {
                  $in: ["Pakistan"],
              },
              year: {
                  $gte: 2000,
              },
          })
          .sort({
              metacritic: -1
          })
          .map(({ title, year, plot, genre, poster }) => ({
            title,
            year,
            plot,
            genre,
            poster,
        }))
          .limit(50)
          .toArray();
        res.json(movies);
    });

    router.post("/new", (req, res) => {
        const { title } = req.body;
        const result = mongoDatabase.collection("movies").insertOne({
            title,
        });
        res.sendStatus(500);
    });

    return router;
}