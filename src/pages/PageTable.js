// Axios to post data request to php
import axios from 'axios';
import { useEffect, useState } from 'react';
import { UploadFile } from '../components/UploadFile';

export const PageTable = () => {

    const [tableData, setTableData] = useState([]);
    const [fileUpdate, setFileUpdate] = useState(Date.now());
    
    // fetch data from database
    useEffect (
        () => {
            axios.get('http://localhost:8888/expensewatcher/querytable.php').then(res => {
                setTableData(res.data);
            })
        }, [fileUpdate]
    );

    function setFileUploadStatus() {
        setFileUpdate(Date.now());
    }
    return (
        <>
            <div>
                <UploadFile setFileUploadStatus={setFileUploadStatus} />
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Transaction Description</th>
                            <th>Withdrawals</th>
                            <th>Deposits</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tableData && 
                            tableData.map((oneRecord, i) => 
                                <tr key={i}>
                                    <td>{oneRecord.date}</td>
                                    <td>{oneRecord.transaction_desc}</td>
                                    <td>{oneRecord.withdrawals}</td>
                                    <td>{oneRecord.deposits}</td>
                                    <td>{oneRecord.balance}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}