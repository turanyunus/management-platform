const { Pool } = require('pg')
const pool = new Pool({})

const getUsers = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM public.user')
    res.status(200).json(response.rows[0])
  } catch (err) {
    console.log(err.stack)
  }
}

module.exports = {
  getUsers
}
