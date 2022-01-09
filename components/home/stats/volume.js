import { Card } from "react-bootstrap";
import FontIcon from "../../global/fonticon";

export default function VolumeCard({ ... props}) {

    return(<>
    <Card className="shadow mb-3">
        <Card.Body>
            <div className="d-flex align-items-center">
                <div className="px-3">
                    <FontIcon 
                        icon="analytics" 
                        color="primary" 
                        size="lg" 
                        className="hover-icon"/>
                </div>
                <div>
                    <p className="small mb-0 text-muted">
                        Volume
                    </p>
                    <p className="mb-0">{props.value}</p>
                </div>
            </div>
        </Card.Body>
    </Card>
    </>)

}