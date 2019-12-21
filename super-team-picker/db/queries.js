const knex = require(('./client'))

const queries = {
    getAll(){
        return knex("cohorts").select("*")
        .orderBy("createdAt", "DESC")
    },
    new(cohortObj){
        return knex('cohorts')
        .insert(cohortObj,'*')
    },

    getOne(id){
        return knex("cohorts").where("id", id)
        .first()
    },
    delete(id){
        return knex('cohorts')
        .where("id", req.params.id)
        .del()
    },

    

}

 
module.exports = queries










// // NAME: notes#show, METHOD: GET, PATH: /notes/:id
// router.get("/:id", (req, res) => {
//   // In the URL above, all the words prefixed with  `:`
//   // are called URL params. You can view the values of URL params
//   // with the `req.params` object property. It contains an object
//   // where the property name corresponds to the name of the url param
//   // and its associated value.

//   // `req.params` is an object with key value pairs created by
//   // pattern-matching against "variables" named in the URL/path
//   // route /notes/:id/:name/:job the route then accessed was: /notes/100/Bob/developer
//   // req.params === { id: "100", name: "Bob", job: "developer" }
//   const id = req.params.id;
//   knex("notes")
//     .where("id", id)
//     .first()
//     // first is a Knex method that works with SELECT queries
//     // It will return the first result from the array of results
//     // that matched the where clause
//     // Without `first` the result returned from the query will always be an
//     // array of values, even if we know that it is returning only a single value
//     .then(note => {
//       // If there is a note with that id, we will show it, otherwise
//       // we will redirect the user to the list of all posts
//       if (note) {
//         res.render("notes/show", {
//           note: note
//         });
//       } else {
//         res.redirect("/posts");
//       }
//     });
// });

// NAME: notes#destroy, METHOD: DELETE, PATH: /notes/:id
// router.delete("/:id", (req, res) => {
//   knex("notes")
//     .where("id", req.params.id)
//     .del()
//     .then(() => {
//       res.redirect("/notes");
//     });
// });

// NAME: notes#edit, METHOD: GET, PATH: /notes/:id/edit
// router.get("/:id/edit", (req, res) => {
//   console.log("hello from edit route");
//   knex("notes")
//     .where("id", req.params.id)
//     .first()
//     .then(note => {
//       res.render("notes/edit", { note: note });
//     });
// });

// Name: notes#update, METHOD: PATCH, PATH: /notes/:id
// router.patch("/:id", (req, res) => {
//   const updatedNote = {
//     title: req.body.title,
//     body: req.body.body
//   };
//   knex("notes")
//     .where("id", req.params.id)
//     .update(updatedNote)
//     .then(() => {
//       res.redirect(`/notes/${req.params.id}`);
//     });
// });