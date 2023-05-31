import axios from "axios";
import { useEffect, useState } from "react";

export const UploadFile = ({setFileUploadStatus}) => {
    
    const [selectedFiles, setSelectedFiles] = useState("");
    const [responseArray, setResponseArray] = useState([]);

    function handleInputChange(e) {
        setSelectedFiles(e.target.files);
    }
    
    function onSubmit() {
        // e.preventDefault();
        console.log("Submit button is clicked!");
        if (!selectedFiles) {
            alert("Please select a file!");
            return;
        }

        const data =new FormData();

        for (let i=0; i< selectedFiles.length; i++) {
            data.append("file[]", selectedFiles[i]);
        }

        // console.log(data.getAll('file[]'));

        let url = "http://localhost:8888/expensewatcher/file-upload.php";

        axios
        .post(url, data, {
          // receive two parameter endpoint url ,form data
        })
        .then((res) => {
          // then print response status
          setResponseArray(res.data);
          resetFile();
          setFileUploadStatus();
        },error=>{
          alert(error);
        });
    }

    function resetFile() {
        document.getElementsByName("file")[0].value = null;
    }

    return (
        <>
            <div>
                <label>Select File...</label>
                <input 
                    type="file" 
                    accept=".csv"
                    className="form-control"
                    name="file"
                    onChange={(e) => handleInputChange(e)}
                />
            </div>
            <div>
                <button 
                    type="submit"
                    className="submit-button"
                    // onClick={(e) => onSubmit(e)}
                    onClick={() => onSubmit()}
                >
                    Upload File
                </button>
            </div>
            <div>
                {/* {responseArray && 
                    responseArray.map((res,i) =>
                    <p key={i}>
                        {res.status}
                    </p>
                )} */}
            </div>
        </>
    )
};