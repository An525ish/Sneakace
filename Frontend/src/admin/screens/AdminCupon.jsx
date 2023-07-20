import React, { useState } from 'react'
import "../admin.css"
import Sidebar from '../utils/Sidebar'
import { Box, Button, TextField, useMediaQuery } from '@mui/material';
import Header from '../components/Header';
const AdminCupon = () => {
    const [isSidebar, setIsSidebar] = useState(true);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    return (
        <>

            <div className="admin">
                <Sidebar isSidebar={isSidebar} />
                <main className="content">
                    <Box m="20px">
                        <Header title="CREATE CUPON" subtitle="Create a New Cupon" />
                        <form >
                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                sx={{
                                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                }}
                            // margin={"30px"}
                            >
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="cupon code"

                                    name="cupon code"
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Discount percent"
                                    name="discount percent"
                                    sx={{ gridColumn: "span 2" }}
                                />
                                  <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Category"
                                    name="category"
                                    sx={{ gridColumn: "span 2" }}
                                />
                            </Box>
                            <Box display="flex" justifyContent="end" mt="20px">
                                <Button
                                    type="submit" color="secondary" variant="contained">
                                    Create New cupon
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </main>
            </div>

        </>
    )
}

export default AdminCupon