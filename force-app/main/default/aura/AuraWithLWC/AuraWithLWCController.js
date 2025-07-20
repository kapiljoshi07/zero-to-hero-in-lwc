({
    messageHandler : function(component, event, helper) {
        var msg = event.getParam("msg");
        component.set("v.message", msg);
    }
})