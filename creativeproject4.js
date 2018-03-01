     window.onload=function(){
      var quiz = {
        title: 'El Quiz (Of Espanol)',
        questions: [
          {
            text: "Soy Mitt Romney y \" \" senador de Utah.",
            responses: [
              {text: 'estoy corriendo'}, 
              {text: 'aspiro a', correct: true}, 
            ]
          }, {
            text: "La salsa es tan picante que le comienza \" \" la nariz.",
            responses: [
              {text: 'gotear', correct: true}, 
              {text: 'correr'},
            ]
          }, {
            text: "Ayer, \" \" mi amigo que no he visto hace mucho." ,
            responses: [
              {text: 'me gotee con'},
              {text: 'me tropeze con', correct: true},
            ]
          }, {
            text: "Solo Superman puede \" \" tan rapidamente como un tren.",
            responses: [
              {text: 'postularse'},
              {text: 'correr', correct: true},
            ]
          }, {
            text: "Su refi esta \" \"?",
            responses: [
              {text: 'corriendo'}, 
              {text: 'funcionando', correct: true},
            ]
          }, {
            text: "El el evento que mi amigo y yo \" \" empieza hoy.",
            responses: [
              {text: 'dirigimos', correct: true}, 
              {text: 'tropezamos'},
            ]
          }, {
            text: "Los colores \" \" cuando se mezcian con agua.",
            responses: [
              {text: 'se corren', correct: true},
              {text: 'se extienden'},
            ]
          }, {
            text: "La llebre \" \" mas rapido que el tortuga.",
            responses: [
              {text: 'corriendo'}, 
              {text: 'corre', correct: true},
            ]
          }, {
            text: "Los limites de la cuidad \" \" desde el rio hasta las montanas.",
            responses: [
              {text: 'corren'},
              {text: 'se extienden', correct: true},
            ]
          }, {
            text: "Ese transbordador \" \" hasta Palenque.",
            responses: [
              {text: 'corre'}, 
              {text: 'va', correct: true},
            ]
          }     
        
        ]
      };
            
      new Vue({
        el: '#app',
        data: {
          quiz: quiz,
          questionIndex: 0,
          userResponses: Array(quiz.questions.length).fill(false)
        },

        methods: {
          
          next: function() {
            this.questionIndex++;
          },
          
          prev: function() {
            this.questionIndex--;
          },
     
          score: function() {
            return this.userResponses.filter(function(val) { return val }).length;
          },
        }
      });
    };
  