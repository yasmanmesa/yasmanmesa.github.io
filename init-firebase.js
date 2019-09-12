    const firebaseConfig = {
        apiKey: "AIzaSyBc0TrU0b0K1_siMiTcBHiD5I0-x0deNfI",
        authDomain: "remote-config-android.firebaseapp.com",
        databaseURL: "https://remote-config-android.firebaseio.com",
        projectId: "remote-config-android",
        storageBucket: "",
        messagingSenderId: "1027084026820",
        appId: "1:1027084026820:web:7e9a4a38c2b5d6f1f41a91"
    };

    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    const configsRef = database.ref("/configs");

    function writeMainActivityData_V1() {

        let data = activity("MainActivity", [
            buttonView("buttonShowPopUp", onClickListener([
                displayDialog("alertDialog1", "Stores", "This is a list of elements", null, null, null, null, view("list_view_row_item", "listView", onItemClickListener([
                    cancelDialog("alertDialog1"),
                    displayToast("Yanela Hernandez Rodriguez")
                ])))
            ]))
        ]);

        configsRef.set(data);
    }

    function writeMainActivityData_V2() {

        const data = activity("MainActivity", [
            buttonView("buttonShowPopUp", onClickListener([
                displayDialog("alertDialog1", "Stores", null, "ok", "cancel", false, ["Yasman", "Mesa", "Hernandez"], null, null, onItemClickListener([
                    displayToast("Yanela Hernandez Rodriguez")
                ]))
            ]))
        ]);

        configsRef.set(data);
    }

    function writeMainActivityData_V3(activityName, buttonId, message) {

        const data = activity(activityName, [
            buttonView(buttonId, onClickListener([
                displayToast(message)
            ]))
        ]);

        configsRef.set(data);
    }