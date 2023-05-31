import axios from "axios";
import { useEffect, useState } from "react";

export const UploadFile = () => {
    // reference for file upload in react via php
    // https://www.freakyjolly.com/react-upload-file-example-axios-php-tutorial/

    const [selectedFile, setSelectedFile] = useState("");

    // handle input change
    function handleInputChange(e) {
        setSelectedFile(e.target.files[0]);
    }
    function handleSubmit() {
        if (!selectedFile) {
            alert("Please select a file!");
        }
        const data = new FormData();

        // data.append("filename[]", selectedFile);
        data.append("file", selectedFile);

        let url = "http://localhost:8888/expensewatcher/file-upload.php";

        let testfilename = data.get("file");
        console.log(`url: ${url}, data: ${selectedFile} `);
        // axios
        //     .post(url, data)
        //     .then((response) => {
        //         console.log(response);
        //     });

        // resetFile();

    }

    function resetFile() {
        document.getElementById("filename").value = null;
    }

    return (
        <div>
            {/* <form method="POST" enctype="multipart/form-data"> */}
            {/* <form > */}
            <div>
                <input type="file" name="filename" accept=".csv" onChange={(e) => {handleInputChange(e)}} id="filename"/>
            </div>
            <div>
                <input type="submit" value="Submit" id="submit-btn" onClick={() => handleSubmit()} />
            </div>
            {/* </form> */}
        </div>
    )
};