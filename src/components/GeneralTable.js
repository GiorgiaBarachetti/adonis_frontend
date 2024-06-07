import {useState} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";

const GeneralTable = ({columns, rows}) => {
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
                            <TableRow key={row.id}>
                                {columns.map((column) => (
                                    <TableCell key={column.id} align={column.align}>
                                        {row[column.id]}
                                    </TableCell>
                                ))}
                            </TableRow>
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
