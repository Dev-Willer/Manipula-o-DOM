import express from 'express';
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


app.use('/login', (req, res) => {
const {email, senha} = req.body
return  res.status(200).json({ mensagem: `O usuário com e-mail: ${email} e senha: ${senha} foi cadastrado com sucesso!` })
})



app.listen(3000, () => {console.log('Servidor rodando na porta 3000 🚀')})