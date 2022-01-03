import { Divider } from '@mui/material';

export function ColorBoxAndDevelopmentApproach() {
    return (
        <div className="color-box-development-approach">
            <ColorBox/>
            <DevelopmentApproach/>
        </div>
    )
}

function ColorBox() {
    return(
        <div className="color-box">
        <div className="sigle-color-box primary">
                <div className="sigle-color-box-content">
                    <p>Primary</p>
                    <p>#4e73df</p>
                </div>
            </div>

            <div className="sigle-color-box success">
                <div className="sigle-color-box-content">
                    <p>Success</p>
                    <p>#1cc88a</p>
                </div>
            </div>

            <div className="sigle-color-box info">
                <div className="sigle-color-box-content">
                    <p>Info</p>
                    <p>#36b9cc</p>
                </div>
            </div>

            <div className="sigle-color-box warning">
                <div className="sigle-color-box-content">
                    <p>Warning</p>
                    <p>#f6c23e</p>
                </div>
            </div>

            <div className="sigle-color-box danger">
                <div className="sigle-color-box-content">
                    <p>Danger</p>
                    <p>#e74a3b</p>
                </div>
            </div>

            <div className="sigle-color-box secondary">
                <div className="sigle-color-box-content">
                    <p>Secondary</p>
                    <p>#858796</p>
                </div>
            </div>

            <div className="sigle-color-box light">
                <div className="sigle-color-box-content">
                    <p>Light</p>
                    <p>#f8f9fc</p>
                </div>
            </div>

            <div className="sigle-color-box dark">
                <div className="sigle-color-box-content">
                    <p>Dark</p>
                    <p>#5a5c69</p>
                </div>
            </div>
        </div>
    )
}

function DevelopmentApproach() {
    return (
        <div className="development-approach">
        <div>
            <h2 style={{margin: '10px', color: '#4e73df', fontWeight: '700'}}>Developmnt Approach</h2>
        </div> 
        <Divider style={{marginBottom: '20px !important'}} variant="fullWidth" />

        <p style={{margin: '20px'}}>
        SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
        </p>

        <p style={{margin: '20px'}}>
        Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
        </p>
    </div>
    )
}