const sequelize = require(`./database.js`)

const seed = () => {
    sequelize.query(`
    DROP TABLE IF EXISTS user_cats;
    DROP TABLE IF EXISTS cats;
    
    
    CREATE TABLE cats (
        cat_id SERIAL PRIMARY KEY,
        cat_name TEXT,
        cat_image TEXT,
        cat_rarity INTEGER
        );
        
        INSERT INTO cats (cat_name, cat_image, cat_rarity)
        VALUES ('Nyan Cat', 'https://media1.tenor.com/m/2roX3uxz_68AAAAC/cat-space.gif', 5),
        ('Uni', 'https://media1.tenor.com/m/txyvkWK8pXkAAAAd/uni-cat-cat.gif', 5),
        ('Mewing Cat', 'https://media1.tenor.com/m/rH9J08_cfjEAAAAd/giga-gigacat.gif', 4),
        ('Bingus', 'https://media1.tenor.com/m/n-3Z3MGgz2UAAAAd/bingus-blink.gif', 5),
        ('Silver Paw', 'https://i.redd.it/s8wevqe195631.png', 5),
        ('Huh', 'https://media1.tenor.com/m/vmSP8owuOYYAAAAd/huh-cat-huh-m4rtin.gif', 5),
        ('Distraught Cat', 'https://i.kym-cdn.com/photos/images/original/001/349/862/8a4.jpg', 4),
        ('Distraught Kitten', 'https://media.tenor.com/-WxqpxyUTD4AAAAM/daladada-cat.gif', 3),
        ('Screaming Cat', 'https://media1.tenor.com/m/k94SAYMi1gIAAAAC/screaming.gif', 4),
        ('Sussy Cat', 'https://media1.tenor.com/m/yNMGjXsoYGUAAAAd/cat-cats.gif', 4),
        ('Insane Cat', 'https://media1.tenor.com/m/47qpxBq_Tw0AAAAd/cat-cat-meme.gif', 3),
        ('Judge Cat', 'https://media.tenor.com/vnX2IhoPSpEAAAAM/orange-cat-staring-orange-cat.gif', 3),
        ('Arrival Cat', 'https://media.tenor.com/nJqmK4EF7DsAAAAM/arrived-meme.gif', 4),
        ('Cyborg Cat', 'https://media1.tenor.com/m/6tlB3xGf1AoAAAAC/cat-white.gif', 4),
        ('Standing Cat', 'https://media1.tenor.com/m/Z0_epChCzkMAAAAC/cat-standing.gif', 3),
        ('Dancing Cat', 'https://media1.tenor.com/m/5BYK-WS0__gAAAAd/cool-fun.gif', 4),
        ('Drift Cat', 'https://media.tenor.com/312YEuuM7uAAAAAM/cat-drift.gif', 4),
        ('Crying Cat', 'https://media1.tenor.com/m/P3RqQUUK9BAAAAAd/rip-juice-cry.gif', 3),
        ('Familiar Cat', 'https://external-preview.redd.it/FOTCl5g8kCW3ZD2gXefqiPEyvf_mP_nx8znjqLj_2Pw.png?width=1080&crop=smart&auto=webp&s=4055a7c6fb3bdc1c3b2a60c3850a12a56c366c64', 4),
        ('Milk Cat', 'https://media1.tenor.com/m/Obrf_cJziQ8AAAAC/milk-cat-cat.gif', 3),
        ('Grumpy Cat', 'https://media1.tenor.com/m/PjAlWiWjUToAAAAC/lily-in-the-morning-grumpy-cat.gif', 5),
        ('Sakamoto', 'https://media.tenor.com/mSsBdSwklIIAAAAi/dm4uz3-sakamoto.gif', 5),
        ('Happy Cat', 'https://media1.tenor.com/m/zAHCPvoyjNIAAAAC/yay-kitty.gif', 4),
        ('Rocket Cat', 'https://media1.tenor.com/m/9s9gPUZcBWgAAAAC/cat-jump-camera-cat.gif', 3),
        ('Flying Cat', 'https://media1.tenor.com/m/nu7OdHmfgdcAAAAC/cat-fly-fly.gif', 3),
        ('Swimming Cat', 'https://media1.tenor.com/m/yd_ehoTvviwAAAAd/cat-swimming.gif', 3),
        ('PTSD Cat', 'https://media1.tenor.com/m/fm4u-L3RJjMAAAAC/cat-thousand-yard-stare-thousand-yard-stare.gif', 4),
        ('Kissing Cat', 'https://media1.tenor.com/m/o_5RQarGvJ0AAAAC/kiss.gif', 5),
        ('Comrade Cat', 'https://media1.tenor.com/m/UQNlRH-B9lAAAAAd/yes-pdp.gif', 5),
        ('Sleepy Cat', 'https://media1.tenor.com/m/tyaej0WHQd0AAAAd/cat-sleep.gif', 3),
        ('DevMountain Cat', 'https://media1.tenor.com/m/NwY5ppxLs_oAAAAd/kitten-keybo.gif', 4),
        ('Imposter Cat', 'https://media1.tenor.com/m/GRPBjTIKVsQAAAAd/snack-bananas.gif', 4),
        ('Delicious Cat', 'https://media1.tenor.com/m/fTTVgygGDh8AAAAC/kitty-cat-sandwich.gif', 3),
        ('Jumpscare Cat', 'https://media.tenor.com/bPWqDiHXFzwAAAAM/cat-kitty.gif', 3),
        ('Murderous Cat', 'https://media1.tenor.com/m/G9qmH_P1nbsAAAAd/angry-angry-cat.gif', 3),
        ('Athlete Cat', 'https://media1.tenor.com/m/aVKkl1TnpLIAAAAd/small-cat-angry-cat.gif', 3),
        ('Lasagna', 'https://media1.tenor.com/m/mOXi0dOQMUsAAAAC/garfield-belly.gif', 5),
        ('Gamer Rage Cat', 'https://media1.tenor.com/m/-legwEzkXG0AAAAC/angry-cat.gif', 4),
        ('Bongo Cat', 'https://media1.tenor.com/m/4gUr5zLU9tIAAAAC/bongo-cat.gif', 5),
        ('DUI Cat', 'https://media1.tenor.com/m/RvquWa8SmxcAAAAd/smile-cat.gif', 3),
        ('Investigative Cat', 'https://media1.tenor.com/m/hM0zQ2Ea0ZAAAAAd/cat-stare.gif', 3),
        ('Numb Cat', 'https://media1.tenor.com/m/Upo6bEwW940AAAAd/rave-cat.gif', 3),
        ('Transcendent Cat', 'https://media1.tenor.com/m/vsSnYKMVV74AAAAd/cat.gif', 5),
        ('Begging Cat', 'https://media1.tenor.com/m/0rPjitCLTt8AAAAC/cute-kitten.gif', 3),
        ('Big Floppa', 'https://media1.tenor.com/m/UwadACu7JWsAAAAd/reee.gif', 5),
        ('Fighting Cat', 'https://media1.tenor.com/m/aVKkl1TnpLIAAAAd/small-cat-angry-cat.gif', 3),
        ('Comfy Cat', 'https://media1.tenor.com/m/Ue2HhEEP4DgAAAAd/tired-cat.gif', 3),
        ('Mewo', 'https://media1.tenor.com/m/0pnQabk3vHUAAAAC/mewo-omori.gif', 5),
        ('Shocked Cat', 'https://media1.tenor.com/m/ZuXnTDxIbjQAAAAC/shocked-shocked-cat.gif', 3),
        ('Large Cat', 'https://media1.tenor.com/m/lP0bw19omAIAAAAC/cat-fat.gif', 3),
        ('Yoked Cat', 'https://media1.tenor.com/m/edcI22MHHcYAAAAd/cat-muscle.gif', 3),
        ('Unflexible Cat', 'https://media1.tenor.com/m/-DVfIiNM6zAAAAAd/kitty-bad.gif', 3),
        ('Bavarian Cat', 'https://media1.tenor.com/m/xJIJ9MW--ggAAAAd/cat-stylish.gif', 3),
        ('Jam Cat', 'https://media1.tenor.com/m/hnxoqRQ_0RcAAAAd/cat-jam.gif', 4),
        ('Wanted Cat', 'https://media1.tenor.com/m/9OSKvHtt0lYAAAAd/cat-kitty.gif', 4),
        ('Battle Cat', 'https://media1.tenor.com/m/nteutI2h8wIAAAAC/mus8029-cat-gun.gif', 4);

        CREATE TABLE user_cats (
            user_cats SERIAL PRIMARY KEY,
            num_of_cats INTEGER,
            user_id INTEGER REFERENCES users(user_id),
            cat_id INTEGER REFERENCES cats(cat_id)
        );
        `).then(() => {
            console.log(`DB seeded`)
        })
    }
    
    module.exports = seed
    
// Cat Template ('name', 'img', 0)
