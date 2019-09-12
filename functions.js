    function activity(name, operations) {
        return {
            [name]: operations
        }
    }

    function operation(type, content) {
        return {
            "type": type,
            "content": content
        }
    }

    function action(content) {
        return operation("action", content);
    }

    function view(id, type, listener) {

        return operation("view", {
            "id": id,
            "type": type,
            "listener": listener
        });
    }

    function buttonView(id, listener) {
        return operation("view", {
            "id": id,
            "type": "view",
            "listener": listener
        });
    }

    function listener(event, operations) {
        return {
            "event": event,
            "operations": operations
        }
    }

    function onClickListener(operations) {
        return listener("onClick", operations)
    }

    function onItemClickListener(operations) {
        return listener("onItemClick", operations)
    }

    function actionContent(varName, name, parameters) {
        return {
            "var": varName,
            "name": name,
            "parameters": parameters
        }
    }

    function displayDialog(varName, title, message, positiveButton, negativeButton, cancelable, items, view, icon,
                           itemListener, positiveButtonListener, negativeButtonListener) {

        let content = actionContent(valid(varName), "displayDialog", {
            "title": valid(title),
            "message": valid(message),
            "positiveButton": valid(positiveButton),
            "negativeButton": valid(negativeButton),
            "cancelable": valid(cancelable),
            "items": valid(items),
            "view": valid(view),
            "icon": valid(icon),
            "itemListener": valid(itemListener),
            "positiveButtonListener": valid(positiveButtonListener),
            "negativeButtonListener": valid(negativeButtonListener)
        });

        return action(content);
    }

    function valid(value) {
        return value===undefined ? null:value
    }

    function displayToast(message) {

        return action({
            "name" : "displayToast",
            "parameters" : {
                "message" : message
            }
        })
    }

    function cancelDialog(varName) {

        return action({
            "var" : varName,
            "name" : "cancelDialog"
        })
    }