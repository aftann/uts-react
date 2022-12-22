const Peminjaman = require('../models/peminjamanModel');
const router = ('express').Router();

router.get('/', async(req, res) =>{
    
    const peminjaman = await Peminjaman.findAll({
        include: [
         {
             model: anggota,
             as: 'nama'
         },
         {
             model: buku,
             as: 'n_buku'
         }
        ] 
     })
     
     res.json(Peminjaman)
})

router.post('/', async(req, res) =>{
const name = req.body.name;
const name_buku = req.body.buku;
const tanggal_pinjam = req.body.tanggal_pinjam;
const tanggal_kembali = req.body.tanggal_kembali;
const tanggal_dikembalikan = req.body.tanggal_dikembalikan;
const peminjaman = await Peminjaman.create({
    name : name,
    name_buku : name_buku,
    tanggal_pinjam : tanggal_pinjam,
    tanggal_kembali : tanggal_kembali,
    tanggal_dikembalikan : tanggal_dikembalikan
});
res.json(peminjaman)
})

// router.put('/:id', async(req, res) =>{
//     const id = req.params.id;
//     const name =req.body.name;
//     const alamat =req.body.alamat;
//     const anggota = await Anggota.update({
//         id : id,
//         name : name,
//         alamat : alamat,},{
//         where:{
//             id:id
//         }
//     });

// res.json(anggota)
// })

router.delete('/:id', async(req, res) =>{
const id = req.params.id;
await Anggota.destroy({
    where:{
        id: id
    }
});
res.json(berita);
})



module.exports=router;

