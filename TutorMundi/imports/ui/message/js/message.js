 import { Template } from 'meteor/templating';
 import '../message.html';

 // Responsável por calcular o tempo em que a última mensagem foi enviada
 Template.message.helpers({
	 timeDifference(postTime) {
			return moment(postTime).fromNow();
		}
});