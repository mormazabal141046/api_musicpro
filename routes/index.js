const express = require('express');
const axios = require('axios');
const router = express.Router();


function getHeaders(){
    return {
        "Authorization":"Token",
        "Tbk-Api-Key-Id":"597055555532",
        "Tbk-Api-Key-Secret":"579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C",
        "Content-Type":"application/json",
    }
}

router.post('/payment/transbank/create',async  (req,res)=>{    
    const headers = await getHeaders()
    const url = 'https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.2/transactions'
    const data = req.query;
     axios({
        method:'POST',
        url: url,
        data: data,
        headers: headers
    }).then(resp => {
        res.json(resp.data)

    }).catch(error =>{
        res.json(error)
    });
});

router.get('/payment/transbank/commit',async  (req,res)=>{    
    const headers = await getHeaders()
    const { token_ws } = req.query;
    const url = `https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.2/transactions/${token_ws}`
     axios({
        method:'PUT',
        url: url,
        headers: headers
    }).then(resp => {
        res.json(resp.data)
    }).catch(error =>{
        res.json(error)
    });
});

module.exports = router;