INSERT INTO users (name, nickname, picture, rank, games_played, games_won, user_id)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;