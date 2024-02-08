const arrayPerguntas = [

  {
    pergunta: "Qual o nome do protagonista de One Piece?",
    respostas: [
      "Monkey D. Luffy",
      "Roronoa Zoro",
      "Nami",
    ],
    correta: 0
  },

  {
    pergunta: "Qual o nome do navio dos Chapéus de Palha atualmente?",
    respostas: [
      "Thousand Sunny",
      "Going Merry",
      "Black Pearl",],
    correta: 0
  },

  {
    pergunta: "Qual a fruta do diabo que Luffy comeu?",
    respostas: [
      "Gomu Gomu no Mi",
      "Bara Bara no Mi", "Hito Hito no Mi",
    ],
    correta: 0
  },

  {
    pergunta: "Qual o sonho de Luffy?",
    respostas: [
      "Se tornar o espadachim mais forte do mundo",
      "Encontrar o One Piece e se tornar o Rei dos Piratas",
      "Reunir todos os Chapéus de Palha",
    ],
    correta: 1
  },

  {
    pergunta: "Quem é o espadachim do bando do Chapéu de Palha?",
    respostas: [
      "Roronoa Zoro",
      "Sanji",
      "Usopp",
    ],
    correta: 0
  },

  {
    pergunta: "Qual o nome da ilha natal de Nami?",
    respostas: [
      "Syrup Village",
      "Cocoyasi Village",
      "Orange Town",
    ],
    correta: 1
  },

  {
    pergunta: "Qual o nome do Yonkou que Luffy derrotou em Whole Cake Island?",
    respostas: [
      "Kaido",
      "Big Mom",
      "Shanks",
    ],
    correta: 1
  },

  {
    pergunta: "Qual o nome do primeiro membro do bando do Chapéu de Palha?",
    respostas: [
      "Roronoa Zoro",
      "Nami",
      "Usopp",
    ],
    correta: 0
  },

  {
    pergunta: "Qual é o nome da fruta da luz?",
    respostas: [
      "Sora Sora no Mi",
      "Pika Pika no Mi",
      "Inu Inu no Mi, Modelo: Jackal",
    ],
    correta: 1
  },

  {
    pergunta: "Qual o nome da organização secreta que controla o Governo Mundial?",
    respostas: [
      "Cipher Pol",
      "Baroque Works",
      "CP0 (Cipher Pol Aigis Zero)",
    ],
    correta: 2
  },

]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

let corretas = new Set()


for (const item of arrayPerguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  for (const resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta

    dt.querySelector('input').setAttribute('name', 'pergunta -' + arrayPerguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)

      }
      

      let acertos = document.querySelector('#acertos')
      acertos.querySelector('span').textContent = corretas.size + ' de 10 '



    }







    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()




  quiz.appendChild(quizItem)
}
