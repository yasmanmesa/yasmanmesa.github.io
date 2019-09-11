    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBc0TrU0b0K1_siMiTcBHiD5I0-x0deNfI",
        authDomain: "remote-config-android.firebaseapp.com",
        databaseURL: "https://remote-config-android.firebaseio.com",
        projectId: "remote-config-android",
        storageBucket: "",
        messagingSenderId: "1027084026820",
        appId: "1:1027084026820:web:7e9a4a38c2b5d6f1f41a91"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Get a reference to the database service
    let database = firebase.database();


    const activitiesV1 = {
        "MainActivity" : [{
            "type" : "view",
            "content" : {
                "id" : "buttonShowPopUp",
                "type" : "view",
                "listener" : {
                    "event" : "onClick",
                    "operations" : [{
                        "type" : "action",
                        "content" : {
                            "var" : "alertDialog1",
                            "name" : "displayDialog",
                            "parameters" : {
                                "title" : "Stores",
                                "message" : "This is a list of elements" ,
                                "view" : {
                                    "id" : "list_view_row_item",
                                    "type" : "listView",
                                    "listener" : {
                                        "event" : "onItemClick",
                                        "operations" : [{
                                            "type" : "action",
                                            "content" : {
                                                "var" : "alertDialog1",
                                                "name" : "cancelDialog"
                                            }
                                        }, {
                                            "type" : "action",
                                            "content" : {
                                                "name" : "displayToast",
                                                "parameters" : {
                                                    "message" : "Yanela Hernandez Rodriguez"
                                                }
                                            }
                                        }]
                                    }
                                }
                            }
                        }
                    }]
                }
            }
        }]
    };

    let activitiesV2 = {
        "MainActivity" : [{
            "type" : "view",
            "content" : {
                "id" : "buttonShowPopUp",
                "type" : "view",
                "listener" : {
                    "event" : "onClick",
                    "operations" : [{
                        "type" : "action",
                        "content" : {
                            "var" : "alertDialog1",
                            "name" : "displayDialog",
                            "parameters" : {
                                "title" : "Stores",
                                "items" : ["Yasman", "Mesa", "Hernandez"],
                                "positiveButton" : "ok",
                                "itemListener" : {
                                    "event" : "onItemClick",
                                    "operations" : [{
                                        "type" : "action",
                                        "content" : {
                                            "name" : "displayToast",
                                            "parameters" : {
                                                "message" : "Yanela Hernandez Rodriguez"
                                            }
                                        }
                                    }]
                                },
                                "negativeButton" : "cancel",
                                "cancelable" : false
                            }
                        }
                    }]
                }
            }
        }]
    };

    function writeMainActivityData_V1() {
        database.ref('/configs').set(activitiesV1);
    }

    function writeMainActivityData_V2() {
        database.ref('/configs').set(activitiesV2);
    }