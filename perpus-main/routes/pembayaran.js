const Pembayaran = require('../models/pembayaranModel');
const router = ('express').Router();

router.get('/', async(req, res) =>{
    
    const pembayaran = await Pembayaran.findAll()
    res.json(pembayaran)
})

router.post('/', async(req, res) =>{
    const name = req.body.name;
    const jumlah_bayar = req.body.jumlah_bayar;
    const tanggal_bayar = req.body.tanggal_bayar;
    const alamat = req.body.alamat;
    const tanggal_bergabung = req.body.tanggal_bergabung;
    const pembayaran = await Pembayaran.create({
        id_kembali : name,
        jumlah_bayar : jumlah_bayar,
        tanggal_bayar : tanggal_bayar,
    });
    res.json(pembayaran)
})