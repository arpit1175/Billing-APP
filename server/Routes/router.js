const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");

//add new item

router.post("/add", (req,res)=>{

    const { name, price, quantity } = req.body;

    try{
        conn.query("INSERT INTO items SET ?", {name, price, quantity}, (err, result) => {
            if (err) {
                res.status(422).json(err)
                console.log(err)
            } else {
                res.status(201).json(req.body);
            }
        })

    }catch(err){
        res.status(405).json(err)
        console.log(err)

    }
})



router.get("/getitems" ,(req,res)=>{
    conn.query("SELECT * FROM items", (err,result)=>{
        if(err){
            res.status(422).json(err);
        }else{
            res.status(201).json(result);
        }
    } )
    })


    router.put("/update", (req, res) => {
        const { ids, values} = req.body;
        console.log("id :" + ids)
        console.log("value:" + values)
        const query = `UPDATE items SET quantity = '${values}' WHERE id = ${ids}`;
      
        conn.query(query, (err, result) => {
          if (err) throw err;
          res.send("Column updated successfully!");
        });
      });




      router.get('/quantitysum', (req, res) => {
        conn.query(
          `SELECT SUM(quantity) as total_sum FROM items`,
          (err, results) => {
            if (err) {
              return res.send(err);
            } else {
              return res.json({
                total_sum: results[0].total_sum
              });
            }
          }
        );
      });


      router.get('/totalprice', (req, res) => {
        conn.query(
          `SELECT SUM(price * quantity) as total_sum
          FROM items;`,
          (err, results) => {
            if (err) {
              return res.send(err);
            } else {
                
              return res.json({
                total_sum: results[0].total_sum
                
              })
              
            }
          }
        );
      });



      router.get('/bill', (req, res) => {
        conn.query(
          `SELECT *
          FROM items
          WHERE quantity > 0;`,
          (err, results) => {
            if (err) {
              return res.send(err);
            } else {
                
              return res.json(results)
              
            }
          }
        );
      });
    
    

module.exports = router;

