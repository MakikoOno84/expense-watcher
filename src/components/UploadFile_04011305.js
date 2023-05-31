import axios from "axios";
import { useEffect, useState } from "react";
import { useRef } from "react";

export const UploadFile = () => {
    
    let inputRef = useRef(null);
    

    function handleSubmit(event) {
        // event.preventDefault();
        console.log("handleSubmit is called!");
        // if (!inputRef.current) {
        //     alert("Please select a file!");
        // }
        const data = new FormData();

        // data.append("file", inputRef);
        data.append("file", "test");

        console.log(...data.entries());
        console.log(data.get('file'));
        let url = "http://localhost:8888/expensewatcher/file-upload.php";

        let testfilename = data.get("file[]");
        console.log(`url: ${url}, data: ${testfilename} `);
        axios
            .post(url, data)
            .then((response) => {
                console.log(response);
            });

        // resetFile();

    }

    function resetFile() {
        document.getElementById("filename").value = null;
    }

    return (
        <div>
            {/* <form method="POST" enctype="multipart/form-data"> */}
            <form onSubmit={handleSubmit()}>
            <div>
                <input type="file" name="file" accept=".csv" id="filename" ref={inputRef}/>
            </div>
            <div>
                <input type="submit" value="Submit" id="submit-btn"/>
            </div>
            </form>
        </div>
    )
};