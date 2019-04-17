import React, {Component} from 'react';
import { Button, Form, FormGroup, Input, Row, Label } from 'reactstrap';

class HotelsForm extends Component {
  render() {
    return (
      <Form inline>
        <Row form>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input type="search" name="hotelLocation" id="hotelLocation" placeholder="Hotel Location" />
          </FormGroup>

          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input type="date" name="startDate" id="startDate" placeholder="Start Date" />
          </FormGroup>

          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input type="date" name="endDate" id="endDate" placeholder="End Date" />
          </FormGroup>

          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input type="number" name="rooms" id="rooms" placeholder="Rooms" />
          </FormGroup>

          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input type="number" name="guests" id="guests" placeholder="Guests" />
          </FormGroup>
          <Button>Search</Button>
        </Row>
        <Row form>
          <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck"/>
            <Label for="exampleCheck" check>Check me out</Label>
          </FormGroup>
        </Row>


      </Form>
    );
  }
}
export default HotelsForm;