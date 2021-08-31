const axios = require("axios");
const baseUrl = "https://elephant-api.herokuapp.com";

class Controller {
	static async allElephant(req, res) {
		try {
			const response = await axios.get(`${baseUrl}/elephants`);
			const elephants = response.data.filter((e) => e.index);
			res.status(200).json(elephants);
		} catch (err) {
			if (err.response) {
				res.status(err.response.status).json(err.response.data);
			} else {
				res.status(500).json(err);
			}
		}
	}

	static async randomElephant(req, res) {
		try {
			const response = await axios.get(`${baseUrl}/elephants/random`);
			res.status(200).json(response.data);
		} catch (err) {
			if (err.response) {
				res.status(err.response.status).json(err.response.data);
			} else {
				res.status(500).json(err);
			}
		}
	}

	static async sexElephant(req, res) {
		try {
			const { sex } = req.params;
			const response = await axios.get(`${baseUrl}/elephants/sex/${sex}`);
			res.status(200).json(response.data);
		} catch (err) {
			if (err.response) {
				res.status(err.response.status).json(err.response.data);
			} else {
				res.status(500).json(err);
			}
		}
	}

	static async nameElephant(req, res) {
		try {
			const { name } = req.params;
			const response = await axios.get(`${baseUrl}/elephants/name/${name}`);
			res.status(200).json(response.data);
		} catch (err) {
			if (err.response) {
				res.status(err.response.status).json(err.response.data);
			} else {
				res.status(500).json(err);
			}
		}
	}

	static async speciesElephant(req, res) {
		try {
			const { species } = req.params;
			const response = await axios.get(
				`${baseUrl}/elephants/species/${species}`
			);
			res.status(200).json(response.data);
		} catch (err) {
			if (err.response) {
				res.status(err.response.status).json(err.response.data);
			} else {
				res.status(500).json(err);
			}
		}
	}
}

module.exports = Controller;
