import {useState} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const GeneralTable = ({columns, rows}) => {
    const navigate = useNavigate()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    // const getItem = async () => {
    //     await axios.get('http://localhost:3333/booking/me')
    //         .then((res) => {
    //             console.log(res)
    //         })
    // }
    const handleRowClick = (row) => {
        // Perform action with the clicked row data
        console.log('Row clicked:', row);
        // Example action:
        // navigate to another page or open a modal
    };

    const goToEditBookAppointment = () => {
        navigate("/book-appointment", {state: {rows}});
        // console.log('rows', rows)
    };

    return (
        <div sx={{display: 'flex', flexDirection: 'column'}}>
            <TableContainer>
                <Table sx={{minWidth: 450}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {columns?.map((column) => (
                                <TableCell key={column.id}>{column.label}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*{rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)*/}
                        {rows?.map((row) => (
                            <Tooltip title="Clicca per andare al modifica della visita" slotProps={{
                                popper: {
                                    modifiers: [
                                        {
                                            name: 'offset',
                                            options: {
                                                offset: [0, -14],
                                            },
                                        },
                                    ],
                                },
                            }} key={row.id}>
                                <TableRow key={row.id}
                                          hover
                                          onClick={() => handleRowClick(row)}
                                          style={{cursor: 'pointer'}}>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} align={column.align}>
                                            {row[column.id]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </Tooltip>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default GeneralTable;
