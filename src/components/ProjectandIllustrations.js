import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export function ProjectsAndIllustrations() {
    return (
        <div className="projects-and-illustrations">
            <div className='projects'>
                <div>
                    <h2 style={{margin: '10px', color: '#4e73df', fontWeight: '700'}}>Projects</h2>
                </div> 

                <Divider style={{marginBottom: '20px !important'}} variant="fullWidth" />   

                <div className="project-names-completion">
                    <div className="project-names-title">
                        <p style={{fontWeight: '700', fontSize: '80%'}}>Server Migration</p>
                        <p style={{fontWeight: '700', fontSize: '80%'}}>20%</p>
                    </div>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" color='inherit' style={{color: 'red'}} value={20} className="project-progress-bar" />
            	</Box>     

                <div className="project-names-title">
                        <p style={{fontWeight: '700', fontSize: '80%'}}>Sales Tracking</p>
                        <p style={{fontWeight: '700', fontSize: '80%'}}>40%</p>
                    </div>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" color='inherit' style={{color: 'yellow'}} value={40} className="project-progress-bar" />
            	</Box> 

                <div className="project-names-title">
                        <p style={{fontWeight: '700', fontSize: '80%'}}>Customer Database </p>
                        <p style={{fontWeight: '700', fontSize: '80%'}}>60%</p>
                    </div>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" color='inherit' style={{color: 'blue'}} value={60} className="project-progress-bar" />
            	</Box>  

                <div className="project-names-title">
                        <p style={{fontWeight: '700', fontSize: '80%'}}>Payout Details</p>
                        <p style={{fontWeight: '700', fontSize: '80%'}}>80%</p>
                    </div>

                <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" color='inherit' style={{color: 'cyan'}} value={80} className="project-progress-bar" />
            	</Box>

                <div className="project-names-title">
                        <p style={{fontWeight: '700', fontSize: '80%'}}>Account Setup </p>
                        <p style={{fontWeight: '700', fontSize: '80%'}}>Complete!</p>
                    </div>

                <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" color='success' value={100} className="project-progress-bar" />
            	</Box>     
                </div>
            </div>

            <div className="illustrations">
                <div>
                    <h2 style={{margin: '10px', color: '#4e73df', fontWeight: '700'}}>Illustrations</h2>
                </div> 
                <Divider style={{marginBottom: '20px !important'}} variant="fullWidth" /> 

                <img
                 src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
                 alt="Illustrations"
                 style={{width: "25rem", margin: "50px"}}
                />
                <p style={{margin: '20px'}}>
                Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
                </p>
                <a href="https://undraw.co/" style={{margin: '20px'}} target='blank'>Browse Illustrations on unDraw -></a>

            </div>
        </div>
    )
}