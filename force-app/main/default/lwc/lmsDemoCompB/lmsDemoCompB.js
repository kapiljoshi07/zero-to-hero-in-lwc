import { LightningElement, wire } from 'lwc';
import { APPLICATION_SCOPE, publish, subscribe, unsubscribe, MessageContext } from 'lightning/messageService'
import LMSDEMO from "@salesforce/messageChannel/LMSDEMO__c";

export default class LmsDemoCompB extends LightningElement {

  message;
  receivedMsg;
  receivedFrom;
  
  @wire(MessageContext)
  context;

  handleChange(event) {
    this.message = event.target.value;
  }

  handleClick() {
    const pubMsg = {
      val : this.message,
      source : 'Component B'
    }
    publish(this.context, LMSDEMO, pubMsg);
  }

  connectedCallback() {
    this.subscribeMessage();
  }

  subscribeMessage() {
    subscribe(this.context, LMSDEMO, (message) => this.handleMessage(message), {scope: APPLICATION_SCOPE})
  }

  handleMessage(msg) {
    this.receivedMsg = msg ? msg.val : null;
    this.receivedFrom = msg ? msg.source : null; 
  }
}