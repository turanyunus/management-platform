const { Pool } = require('pg')

const pool = new Pool({})

const getCompanies = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM public.company')
    res.status(200).json(response.rows)
  } catch (err) {
    console.log(err.stack)
  }
}

module.exports = {
  getCompanies
}
