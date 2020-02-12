import User from '../models/User';

class UserController {
  // Cadastro de Usuarios
  async store(req, res) {
    // Verifica se usuário ja existe
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }
}

export default new UserController();
