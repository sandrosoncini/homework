const router = require("express").Router()
const knex = require("../db/queries")
const teamList = require("../db/method")



router.get('/', (req, res) => {
    knex
      .getAll()
      .then(cohorts => {
        res.render('cohorts', {
            cohorts: cohorts
        })
      })
  })


router.get('/new', (req, res) => {
    res.render('new')
  })

router.post("/", (req,res)=>{
      knex.new({ 
         title: req.body.title,
         content: req.body.content,
         imageUrl: req.body.imageUrl
         })
       .then(cohorts=>{
           res.redirect("/cohorts")
       })
   })

  //  router.get("/:id", (req, res) => {
  //   knex.delete()
  //     .then(() => {
  //       res.redirect("/cohorts");
  //     });
  // });

   // NAME: notes#show, METHOD: GET, PATH: /notes/:id
router.get("/show/:id", (req, res) => {
  // In the URL above, all the words prefixed with  `:`
  // are called URL params. You can view the values of URL params
  // with the `req.params` object property. It contains an object
  // where the property name corresponds to the name of the url param
  // and its associated value.

  // `req.params` is an object with key value pairs created by
  // pattern-matching against "variables" named in the URL/path
  // route /notes/:id/:name/:job the route then accessed was: /notes/100/Bob/developer
  // req.params === { id: "100", name: "Bob", job: "developer" }
  const id = req.params.id
  const method= req.query.method
  const quantity= req.query.quantity
  knex.getOne(id)
    .then(cohort => {
      if (id) {
        res.render("show", {
          cohort,
          method: req.query,
          quantity: req.query,
          teamList:teamList(cohort, method, quantity )
        });
        
      } else {
        res.redirect("/cohorts");
      }
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id  
  knex.delete(id)
      .where("id", req.params.id)
      .del()
      .then(() => {
        res.redirect("/cohorts");
      });
  });

  module.exports = router

 

