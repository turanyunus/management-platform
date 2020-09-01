const { Pool } = require('pg')

const pool = new Pool({})

const getUsers = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM public.user')
    res.status(200).json(response.rows)
  } catch (err) {
    console.log(err.stack)
  }
}

const getUserById = async (req, res) => {
  try {
    const response = await pool.query(
      'SELECT * FROM public.user WHERE Id = $1',
      [req.params.id]
    )
    res.status(200).json(response.rows)
  } catch (err) {
    console.log(err.stack)
  }
}

const createUser = async (req, res) => {
  try {
    const {
      name,
      surname,
      tckn,
      email,
      phoneNumber,
      birthDate,
      workStartDate,
      workEndDate,
      createdDate,
      createdBy,
      updatedDate,
      updatedBy,
      status,
      role,
      companyId
    } = req.body

    const response = await pool.query(
      'INSERT INTO public.user(name, surname, tckn, email, phoneNumber, birthDate, workStartDate, workEndDate, createdDate, createdBy, updatedDate, updatedBy, status, role, "companyId")' +
        'VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9, $10, $11, $12, $13, $14, $15)',
      [
        name,
        surname,
        tckn,
        email,
        phoneNumber,
        birthDate,
        workStartDate,
        workEndDate,
        createdDate,
        createdBy,
        updatedDate,
        updatedBy,
        status,
        role,
        companyId
      ]
    )
    console.log(response)
    res.status(200).json({
      message: 'Kullanıcınız başarılı bir şekilde oluşturuldu.',
      body: {
        user: { name, surname, email, phoneNumber }
      }
    })
  } catch (err) {
    console.log(err.stack)
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params.id
    const {
      name,
      surname,
      tckn,
      email,
      phoneNumber,
      birthDate,
      workStartDate,
      workEndDate,
      createdDate,
      createdBy,
      updatedDate,
      updatedBy,
      status,
      role,
      companyId
    } = req.body

    const response = await pool.query(
      'UPDATE public.user ' +
        'SET name = $1, ' +
        'surname = $2, ' +
        'tckn = $3, ' +
        'email = $4, ' +
        'phoneNumber = $5, ' +
        'birthDate = $6, ' +
        'workStartDate = $7, ' +
        'workEndDate = $8, ' +
        'createdDate = $9, ' +
        'createdBy = $10, ' +
        'updatedDate = $11, ' +
        'updatedBy = $12, ' +
        'status = $13, ' +
        'role = $14, ' +
        '"companyId" = $15' +
        'WHERE id = $16 ',
      [
        name,
        surname,
        tckn,
        email,
        phoneNumber,
        birthDate,
        workStartDate,
        workEndDate,
        createdDate,
        createdBy,
        updatedDate,
        updatedBy,
        status,
        role,
        companyId,
        id
      ]
    )
    console.log(response)
    res.status(200).json({
      message: 'Kullanıcınız başarılı bir şekilde oluşturuldu.',
      body: {
        user: { name, surname, email, phoneNumber }
      }
    })
  } catch (err) {
    console.log(err.stack)
  }
}

const getUsersByCompanyId = async (req, res) => {
  const { companyId } = req.params
  console.log('companyId : ' + companyId)
  try {
    const response = await pool.query(
      'SELECT * FROM public.user WHERE "companyId" = $1',
      [companyId]
    )
    res.status(200).json(response.rows)
  } catch (err) {
    console.log(err.stack)
  }
}

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  getUsersByCompanyId
}
