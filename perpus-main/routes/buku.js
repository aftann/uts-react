const Buku = require('../models/bukuModel');
const router = require('express').Router();

router.get('/', async(req, res) =>{
    
    const buku = await Buku.findAll()
    res.json(buku)
})

router.post('/', async(req, res) =>{
    const gambar = req.body.gambar;
    const nama_buku = req.body.nama_buku;
    const author = req.body.author;
    const genre = req.body.genre;
    const jenis = req.body.jenis;
    const denda = await Buku.create({
            gambar : gambar,
            nama_buku :nama_buku,
            author : author,
            genre : genre,
            jenis : jenis,
            denda : denda,
    });
    res.json(buku)
})

router.put('/:id', async(req, res) =>{
    const id = req.params.id;
    const nama_buku = req.params.nama_buku;
    const name =req.body.name;
    const author =req.body.author;
    const genre =req.body.genre;
    const jenis =req.body.jenis;
    const denda =req.body.dendsa;
    const anggota = await Buku.update({
        id : id,
        nama_buku : nama_buku,
        name : name,
        uthor : author,
        genre : genre,
        jenis : jenis,
        denda : denda},{
        where:{
            id:id
        }
    });

res.json(buku)
})

router.delete('/:id', async(req, res) =>{
    const id = req.params.id;
    await Buku.destroy({
        where:{
            id: id
        }
    });
    res.json(buku);
})

module.exports=router;