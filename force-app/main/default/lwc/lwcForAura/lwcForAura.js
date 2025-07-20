import { api, LightningElement } from 'lwc';

export default class LwcForAura extends LightningElement {

  @api message;
  messageHandler() {
    this.dispatchEvent(new CustomEvent("sendmsg", {
      detail : {
        "msg" : "This message is from lwc."
      }
    }))
  }
}