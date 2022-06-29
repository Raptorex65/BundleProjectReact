import React from "react";
import Button from 'react-bootstrap/Button'
import DonationForm from '../forms/form'


const MakeDonation = () => {
return (
<>
<Link to={`/donation/`}>
    <Button variant="primary" onClick={DonationForm}>
      Make donation
    </Button>
</Link>
</>
)
}

export default MakeDonation;