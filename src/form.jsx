import 'bulma/css/bulma.min.css';
import { Form, Icon, Button } from 'react-bulma-components';

export function CateringContactForm() {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const formObject = Object.fromEntries(formData.entries());
            console.log(formObject);
        }} className="box" style={{ maxWidth: '500px', margin: 'auto', backgroundColor: '#8B0000', color: 'white', padding: '20px', borderRadius: '8px' }}>
            <h2 className="title has-text-white has-text-centered">Catering Inquiry</h2>
            
            <Form.Field>
                <Form.Label className="has-text-white">Full Name</Form.Label>
                <Form.Control>
                    <Form.Input color="success" name="fullName" placeholder="Your Name" />
                    <Icon align="left" size="small">
                        <i className="fas fa-user" />
                    </Icon>
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Label className="has-text-white">Email</Form.Label>
                <Form.Control>
                    <Form.Input color="success" name="email" placeholder="Your Email" />
                    <Icon align="left" size="small">
                        <i className="fas fa-envelope" />
                    </Icon>
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Label className="has-text-white">Phone Number</Form.Label>
                <Form.Control>
                    <Form.Input color="success" name="phone" placeholder="Your Phone Number" />
                    <Icon align="left" size="small">
                        <i className="fas fa-phone" />
                    </Icon>
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Label className="has-text-white">Event Type</Form.Label>
                <Form.Control>
                    <Form.Select name="eventType">
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="other">Other</option>
                    </Form.Select>
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Label className="has-text-white">Number of Guests</Form.Label>
                <Form.Control>
                    <Form.Input type="number" name="guestCount" placeholder="Estimated Guests" />
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Label className="has-text-white">Additional Details</Form.Label>
                <Form.Control>
                    <Form.Textarea name="details" placeholder="Tell us about your event" />
                </Form.Control>
            </Form.Field>

            <Form.Field kind="group" className="has-text-centered">
                <Form.Control>
                    <Button color="gold" style={{ backgroundColor: '#FFD700', color: '#8B0000' }}>Submit</Button>
                </Form.Control>
                <Form.Control>
                    <Button color="light">Cancel</Button>
                </Form.Control>
            </Form.Field>
        </form>
    );
}
