const { poolPromise } = require("../config/db.js");

module.exports = {
    getAllDesarrollador: async (req, res, next) => {
        try {
          const pool = await poolPromise;
          const result = await pool
            .request()
            .query("SELECT * FROM Desarrollador", function (err, resultset) {
              if (err) {
                console.log(err);
              } else {
                var desarrolladores = resultset.recordset;
                return res.status(200).json(desarrolladores);
              }
            });
        } catch (err) {
          return res
            .status(500)
            .json({ message: `Error al obtener los desarrolladores. Err: ${err}` });
        }
    },
    getDesarrolladorNombre:
    async (req, res, next) => {
      try {
        const pool = await poolPromise;
        const result = await pool
          .request()
          .query("SELECT nombre FROM Desarrollador", function (err, resultset) {
            if (err) {
              console.log(err);
            } else {
              var nombre = resultset.recordset;
              return res.status(200).json(nombre);
            }
          });
      } catch (err) {
        return res
          .status(500)
          .json({ message: `Error al obtener los desarrolladores. Err: ${err}` });
      }
    },
};