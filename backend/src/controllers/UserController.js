const mongoose = require("mongoose")

const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { page } = req.query;
    const users = await User.paginate({}, { page, limit: 10 });

    return res.json(users);
  },

  async store(req, res) {
    const {
      name,
      age,
      phone,
      address,
      symptoms } = req.body;

    const user = await User.create({
      name,
      age,
      phone,
      address,
      symptoms,
      status: 'none'
    });

    return res.json(user);
  },

  async setStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body;

    const user = await User.findByIdAndUpdate(id, { "status": status });

    if(!user) {
      return res.json({ error: 'user not found' })
    }

    return res.json(user)
  }
};
