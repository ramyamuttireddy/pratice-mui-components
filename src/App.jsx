import { Container, Box, Paper ,Avatar } from '@mui/material'
import {Grid2 as Grid} from '@mui/material'
import AlertDialog  from './dialog'
import ButtonAppBar from './appbar'
import BasicSelect from './basicselect'
import NestedList from './lists'
import './App.css'

function App() {

  return (
    <>
      <Container maxWidth="lg" sx={{ bgcolor: "#F8F4F0", padding: "40px" }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"OverView OverView OverView OverView OverView"
        "Posts Posts Posts Budgets Budgets"
        "Tranctions Tranctions Tranctions Budgets Budgets"
        "Tranctions Tranctions Tranctions Budgets Budgets"
        "Tranctions Tranctions Tranctions Recuring Recuring"`
          }}
        >
          {/* OverView Section */}
          <Box sx={{ gridArea: 'OverView' }}>
            <Grid container spacing={2}>
              <Grid size={4}>
                <Paper sx={{padding:"24px"}}>size=8</Paper>
              </Grid>
              <Grid size={4} >
              <Paper sx={{padding:"24px"}}>size=8</Paper>
              </Grid>
              <Grid size={4}>
              <Paper sx={{padding:"24px"}}>size=8</Paper>
              </Grid>
            </Grid>
          </Box>
          {/* Posts Section */}
          <Box sx={{ gridArea: 'Posts', bgcolor: 'white'}}>
            <Box sx={{padding:"40px"}}>
            <AlertDialog />
              </Box>
          </Box>

          {/* Budgets Section */}
          <Box sx={{ gridArea: 'Budgets', bgcolor: 'white' }}>
          <Box sx={{padding:"24px"}}>
          <BasicSelect />
          <Grid container spacing={2} sx={{paddingTop:"30px"}}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Grid>
          
          </Box>
          </Box>

          {/* Transctions Section */}
          <Box sx={{ gridArea: 'Tranctions', bgcolor: 'white' }}>
          <Box sx={{padding:"40px"}}>
          <ButtonAppBar />
          </Box>
          </Box>

          {/* Recuring Bills Section */}
          <Box sx={{ gridArea: 'Recuring', bgcolor: 'white' }}>
          <Box sx={{padding:"40px"}}>
          <NestedList />
          </Box>
          </Box>
        </Box>

      </Container>
    </>
  )
}

export default App
