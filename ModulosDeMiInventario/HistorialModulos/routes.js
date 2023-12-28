const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err);
        
        conn.query('SELECT * FROM historial', (err,rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
    });
});

routes.post('/', (req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err);
        conn.query('INSERT INTO historial set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.json('Data send to the database. Yay!');
        });
    });
});

routes.delete('/:Id', (req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err);
        conn.query('DELETE FROM historial WHERE Id = ?', [req.params.Id], (err, rows)=>{
            if(err) return res.send(err);

            res.json('Data deleted!');
        });
    });
});

routes.put('/:Id', (req, res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err);
        conn.query('UPDATE historial set ? WHERE Id = ?', [req.body, req.params.Id], (err, rows)=>{
            if(err) return res.send(err);

            res.json('Data Update!');
        });
    });
});

module.exports = routes;