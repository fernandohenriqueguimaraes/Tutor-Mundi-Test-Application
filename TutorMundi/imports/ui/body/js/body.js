import { Template } from 'meteor/templating';
import { Messages } from '../../../api/message/messages.js';
import '../body.html';
import '../../message/js/message.js';

// Responsável por extrair todos os objetos mensagens no Mongo DB
Template.body.helpers({
	messages() {
	   return Messages.find();
	},
});

// Responsável por criar o objeto mensagem e armazenar no Mongo DB
Template.body.events({
	   'submit .new-message'(event) {

	     event.preventDefault();

	     const target = event.target;
	     const text = target.text.value;

	     Messages.insert({
	       owner: Meteor.userId(), 
	       username: Meteor.user().username,	 
	       text,
	       createdAt: new Date(),
	     });

	     // Limpa o input do chat após inserção da mensagem
	     target.text.value = '';

	     // Direciona o chat para a ultima mensagem enviada
	     $('.panel-body').scrollTop($('.media-list').height())
		},
});
