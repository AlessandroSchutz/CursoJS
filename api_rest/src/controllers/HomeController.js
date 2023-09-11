import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Miranda',
      email: 'Maria@hotmail.com',
      idade: 24,
      peso: 56,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
