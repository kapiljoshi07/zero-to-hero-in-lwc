({
    handleMessage : function(component, event, helper) {
        if(event != null && event.getParam("val") != null) {
            component.set("v.receivedMsg", event.getParam("val"));
            component.set("v.source", event.getParam("source"));
        }
    }, 

    handleInput: function(component, event) {
        component.set("v.message", event.target.value);
    },

    publishMessage : function(component) {
        let msg = {
            val: component.get("v.message"),
            source: "Aura Component"
        }
        component.find("lmsdemo").publish(msg);
    }
})