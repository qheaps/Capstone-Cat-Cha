
const sequelize = require(`./database.js`)

module.exports = {
    login: (req, res) => {
        const { username, password } = req.body
        console.log(username, password)
        sequelize.query(`
        SELECT * FROM users WHERE username = '${username}';
        `).then(dbRes => {
            if (dbRes[0][0].password === password) {
                console.log(dbRes[0])
                res.status(200).send(dbRes[0][0])
            } else {
                res.status(400).send(`Invalid Credentials`)
            }
        })
        .catch(theseHands => console.log(theseHands))
    },
    register: (req, res) => {
        const { username, password } = req.body
        sequelize.query(`
        SELECT * FROM users WHERE username = '${username}';
        `).then(dbRes => {
            console.log(dbRes[0])
            if (dbRes[0].length > 0) {
                console.log(`user ${username} already exists!`)
            } else {
                sequelize.query(`
                INSERT INTO users (username, password)
                VALUES ('${username}', '${password}');
                `).then(res.status(200).send(dbRes[0]))
            }
        })
        .catch(theseHands => console.log(theseHands))
    },
    assignCats: async (req, res) => {
        const { curUser, star3, star4, star5 } = req.body
        let passedCats = []
        console.log(req.body)

        while (passedCats.length < 10) {
            for (let i = 0; i < star3; i++) {
                    await sequelize.query(
                         `SELECT * FROM cats WHERE cat_rarity = 3
                         ORDER BY RANDOM()
                         LIMIT 1;
                         `).then(dbRes => {
                             sequelize.query(`
                             SELECT * FROM user_cats WHERE cat_id = ${dbRes[0][0].cat_id} AND user_id = ${curUser}
                             `).then(dbRes2 => {
                                 if (!dbRes2[0].length > 0 && passedCats.length < 10) {
                                     sequelize.query(`
                                      INSERT INTO user_cats (user_id, cat_id)
                                      VALUES (${curUser}, ${dbRes[0][0].cat_id});
                                      `)
                                      passedCats.push(dbRes[0][0])
                                 } else if(passedCats.length < 10) {
                                    passedCats.push(dbRes[0][0])
                                 }
                             })
                     })
                }
            
            for (let i = 0; i < star4; i++) {
                await sequelize.query(
                     `SELECT * FROM cats WHERE cat_rarity = 4
                     ORDER BY RANDOM()
                     LIMIT 1;
                     `).then(dbRes => {
                         sequelize.query(`
                         SELECT * FROM user_cats WHERE cat_id = ${dbRes[0][0].cat_id} AND user_id = ${curUser}
                         `).then(dbRes2 => {
                             if (!dbRes2[0].length > 0 && passedCats.length < 10) {
                                 sequelize.query(`
                                  INSERT INTO user_cats (user_id, cat_id)
                                  VALUES (${curUser}, ${dbRes[0][0].cat_id});
                                  `)
                                  passedCats.push(dbRes[0][0])
                             } else if(passedCats.length < 10) {
                                passedCats.push(dbRes[0][0])
                             }
                         })
                 })
            }
    
             for (let i = 0; i < star5; i++) {
                await sequelize.query(
                     `SELECT * FROM cats WHERE cat_rarity = 5
                     ORDER BY RANDOM()
                     LIMIT 1;
                     `).then(dbRes => {
                         sequelize.query(`
                         SELECT * FROM user_cats WHERE cat_id = ${dbRes[0][0].cat_id} AND user_id = ${curUser}
                         `).then(dbRes2 => {
                             if (!dbRes2[0].length > 0 && passedCats.length < 10) {
                                 sequelize.query(`
                                  INSERT INTO user_cats (user_id, cat_id)
                                  VALUES (${curUser}, ${dbRes[0][0].cat_id});
                                  `)
                                  passedCats.push(dbRes[0][0])
                             } else if(passedCats.length < 10) {
                                passedCats.push(dbRes[0][0])
                             }
                            })
                        })
            }
        }
        console.log(passedCats.length)
        await res.status(200).send(passedCats)
    },
    displayAllCats: (req, res) => {
        sequelize.query(`
        SELECT * FROM cats
        ORDER BY cat_rarity DESC;
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
            console.log(dbRes[0])
        })
    },
    displayOwnedCats: async (req, res) => {
        const {curUser} = req.body
        let passedCats = []
        let catIds = []
        let uniqueIds = []
        
        await sequelize.query(`
        SELECT cat_id FROM user_cats WHERE user_id = ${curUser};
        `).then(dbRes => {
            for (let i = 0; i < dbRes[0].length; i++) {
                catIds.push(dbRes[0][i].cat_id)
            }
            let catIdSet = new Set(catIds)
            uniqueIds = catIdSet
            catIds = Array.from(uniqueIds)
        })
            for (let i = 0; i < catIds.length; i++) {
               await sequelize.query(`
                SELECT * FROM cats WHERE cat_id = ${catIds[i]};
                `).then(dbRes2 => {
                    passedCats.push(dbRes2[0][0])
                })
            }
            // console.log(passedCats)
            res.status(200).send(passedCats)
    },
    display5Stars: (req, res) => {
        sequelize.query(`
        SELECT * FROM cats WHERE cat_rarity = 5
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        })
    },
    display4Stars: (req, res) => {
        sequelize.query(`
        SELECT * FROM cats WHERE cat_rarity = 4
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        })
    },display3Stars: (req, res) => {
        sequelize.query(`
        SELECT * FROM cats WHERE cat_rarity = 3
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        })
    }
}
