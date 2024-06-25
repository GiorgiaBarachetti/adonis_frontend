import {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
    InputAdornment,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Tooltip
} from "@mui/material";
import {useNavigate} from "react-router-dom";

const GeneralTable = ({columns, rows}) => {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [filters, setFilters] = useState({});
    const cache = sessionStorage.getItem("user");
    const user = JSON.parse(cache);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleFilterChange = (columnId, value) => {
        setFilters({
            ...filters,
            [columnId]: value,
        });
    };

    const goToEditBookAppointment = (row) => {
        navigate("/book-appointment", {state: {row}});
    };

    const filteredRows = rows.filter(row => {
        return columns.every(column => {
            const filterValue = filters[column.id];
            if (!filterValue) return true;
            return row[column.id].toString().toLowerCase().includes(filterValue.toLowerCase());
        });
    });

    const paginatedRows = filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <div  sx={{maxWidth: 650, '@media (max-width: 1000px)': {minWidth: '100%'}, display: 'flex', flexDirection: 'column'}}>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead style={{backgroundColor: "#f5f5f5"}}>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id}>
                                    {column.label}
                                    <TextField
                                        size="small"
                                        variant="standard"
                                        placeholder={`Cerca`}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        value={filters[column.id] || ''}
                                        onChange={(e) => handleFilterChange(column.id, e.target.value)}
                                        fullWidth
                                    />
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedRows.map((row) => (
                            user.type === "paziente" ? (
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
                                    <TableRow
                                        hover
                                        onClick={() => goToEditBookAppointment(row)}
                                        style={{cursor: 'pointer'}}
                                    >
                                        {columns.map((column) => (
                                            <TableCell key={column.id} align={column.align}>
                                                {row[column.id]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </Tooltip>
                            ) : (
                                <TableRow key={row.id} hover>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} align={column.align}>
                                            {row[column.id]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            )
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default GeneralTable;
