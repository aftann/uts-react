const Anggota = require('../models/anggotaModel');
const router = require('express').Router();

router.get('/', async(req, res) =>{
    
        const anggota = await Anggota.findAll()
        res.json(anggota)
})

router.post('/', async(req, res) =>{
    const name = req.body.name;
    const alamat = req.body.alamat;
    const tanggal_bergabung = req.body.tanggal_bergabung;
    const anggota = await Anggota.create({
        name : name,
        alamat : alamat,
        tanggal_bergabung : tanggal_bergabung,
    });
    res.json(anggota)
})

router.put('/:id', async(req, res) =>{
        const id = req.params.id;
        const name =req.body.name;
        const alamat =req.body.alamat;
        const anggota = await Anggota.update({
            id : id,
            name : name,
            alamat : alamat,},{
            where:{
                id:id
            }
        });
    res.json(anggota)
})

router.delete('/:id', async(req, res) =>{
    const id = req.params.id;
    await Anggota.destroy({
        where:{
            id: id
        }
    });
    res.json(anggota);
})



module.exports=router;

