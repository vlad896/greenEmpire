const db = require('../db')
//неправильные роуты!!!!!!!!!!!!!!
class UserController {
	async createUser(req, res) {
		const { name, phone, date } = req.body
		const newPerson = await db.query(`INSERT INTO users (name, phone, date) values ($1, $2, $3) RETURNING *`, [name, phone, date])

		res.json(newPerson.rows)
	}
	async getUser(req, res) {
		const users = await db.query(`SELECT * FROM users`)
		res.json(users.rows)
	}
	async getOneUser(req, res) {
		const id = req.params.id
		const users = await db.query(`SELECT * FROM users where id=$1`, [id])
		res.json(users.rows)
	}
	async updateUser(req, res) {
		const { id, name, surname } = req.body
		const users = await db.query(`UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`, [name, surname, id])
		res.json(users.rows)
	}
	async deleteUser(req, res) {
		const id = req.params.id
		const users = await db.query(`DELETE FROM person where id=$1`, [id])
		res.json(users.rows[0])
	}
}

module.exports = new UserController()