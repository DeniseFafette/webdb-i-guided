const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        // translates to SELECT * FROM posts
        //res.json(await db.select("*").from("posts"))
        // standard to write code below
        res.json(await db("posts").select())
    } catch (err) {
        next(err)
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        // short way of writing the same code gets verbose
        // const post = await db.select("*").from("posts").where("id", req.params.id)
        // const post = await db("posts").where("id", req.params.id).select()
        //const post = await db("posts").where("id", req.params.id).limit(1).select()
        // to limit to one result that does not return an array
        // below is the standard format of writing this code
        const post = await db("posts").where("id", req.params.id).first()
        res.json(post)
    } catch (err) {
        next(err)
    }
});

router.post('/', async (req, res, next) => {
    try {
        const payload = {
            title: req.body.title,
            contents: req.body.contents,
        }
        // translates to 'INSERT INTO posts (title, contents) VALUES(?, ?);'
        const [id] = await db("posts").insert(payload)
        res.json(await db("posts").where("id", id).first())
    } catch (err) {
        next(err)
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const payload = {
            title: req.body.title,
            contents: req.body.contents,
        }
        // translates to 'UPDATE posts SET title = ? AND contents = ? WHERE id = ?;'
        await db("posts").where("id", req.params.id).update(payload)
        res.json(await db("posts").where("id", req.params.id).first())
    } catch (err) {
        next(err)
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        // translates to 'DELETE FROM posts WHERE id = ?;'
        await db("posts").where("id", req.params.id).del()
        res.status(204).end()
    } catch (err) {
        next(err)
    }
});

module.exports = router;