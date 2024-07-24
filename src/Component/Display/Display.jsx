import { Box, Grid } from "@mui/material";
import RecipeReviewCard from "../Cerd/Cerd";



const Display = () => {
    return (
        <>
            <Grid container sx={{ height: 500 }} spacing={2}>
                <Grid item xs={12} sm={12} md={8} lg={6} xl={12}>
                    <Box sx={{ width: "100%", height: "100%", backgroundColor: "grey" }}>
                    <RecipeReviewCard/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={6} xl={12}>
                    <Box sx={{ width: "100%", height: "100%", backgroundColor: "black" }}>
                        {/* Lorem ipsum dolor sit amet.{" "} */}
                        <RecipeReviewCard/>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
export default Display;