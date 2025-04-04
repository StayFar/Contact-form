import 'bulma/css/bulma.min.css';
import { Form, Icon, Button } from 'react-bulma-components';

export function SubscriberForm() {
    return <form onSubmit={event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
    }}>
      <Form.Field>
        <Form.Label>Client Name</Form.Label>
        <Form.Control>
          <Form.Input
            color="success"
            name="clientName"
            placeholder="Your Full Name"/>
          <Icon align="left" size="small">
            <i className="fas fa-user" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-check" />
          </Icon>
        </Form.Control>
      </Form.Field>

      <Form.Field>
        <Form.Label>Email</Form.Label>
        <Form.Control>
          <Form.Input
            color="danger"
            name="email"
            placeholder="A Valid Email Address"/>
          <Icon align="left" size="small">
            <i className="fas fa-envelope" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-exclamation-triangle" />
          </Icon>
        </Form.Control>
      </Form.Field>

      <Form.Field>
      <Form.Label>Phone Number</Form.Label>
                <Form.Control>
                    <Form.Input 
                    color="danger" 
                    name="phoneNumber" 
                    placeholder="Your Phone Number" />
                    <Icon align="left" size="small">
                        <i className="fas fa-phone" />
                    </Icon>
                </Form.Control>
            </Form.Field>

      <Form.Field>
        <Form.Label>Event Type</Form.Label>
        <Form.Field kind="group">
          <Form.Control>
            <Form.Select
              name="eventType"
            >
              <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="graduation">Graduation</option>
                        <option value="holiday">Holiday Event</option>
                        <option value="reunion">Reunion</option>
                        <option value="retirement">Retirement Party</option>
                        <option value="charity">Charity Event</option>
                        <option value="engagement">Engagement Party</option>
                        <option value="bridal">Bridal Shower</option>
                        <option value="baby">Baby Shower</option>
                        <option value="other">Other</option>
            </Form.Select>
          </Form.Control>
          <Form.Control fullwidth loading>
            <Form.Input placeholder="Additional details about your event" />
          </Form.Control>
        </Form.Field>
      </Form.Field>

      <Form.Field kind="group">
        <Form.Control>
          <Button color="link">Submit</Button>
        </Form.Control>
        <Form.Control>
          <Button color="link" colorVariant="light">
            Cancel
          </Button>
        </Form.Control>
      </Form.Field>

    </form>
}