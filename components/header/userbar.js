import Cookies from 'js-cookie';
import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function Userbar() {
 
    const [wallet, setWallet] = useState({ 
        address: '', 
        formatted: ''
    });

    useEffect(() => {
        let address   = Cookies.get("wallet");
        let formatted = address.substring(0, 2)+"..." + 
                        address.substring(address.length - 4, address.length);

        setWallet({address: address, formatted: formatted });
    }, []);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {wallet ? wallet.address : '' }
        </Tooltip>
    );

    const logout = () => {
        Cookies.remove("wallet");
        window.location = "/";
    }

    return (
        <Fragment>
            <Card className="rounded-0 mb-5 shadow-sm">
                <Card.Body>

                    <Container>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>v2 Wallet Tracker</div>
                            <div>
                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}>
                                    <Button className="bg-gradient-primary rounded-pill px-4" 
                                        id="address"
                                        onClick={() => logout()}>
                                        {wallet ? wallet.formatted : ""}
                                    </Button>
                                </OverlayTrigger>
                            </div>
                        </div>
                    </Container>
                    
                </Card.Body>
            </Card>
        </Fragment>
    );
    
}