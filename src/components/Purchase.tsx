import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Dropdown from 'react-bootstrap/Dropdown';
export default function Purchase() {
  const playerName = 'Braden Dirheimer';
  const [openPricing, setOpenPricing] = React.useState<boolean>(false);
  const [openDelivery, setOpenDelivery] = React.useState<boolean>(false);
  const [openMulchInfo, setOpenMulchInfo] = React.useState<boolean>(false);
  const [quantity, setQuantity] = React.useState<number>(0);
  const [buyerName, setBuyerName] = React.useState<string>('');
  const [buyerPhone, setBuyerPhone] = React.useState<string>('');
  const [buyerEmail, setBuyerEmail] = React.useState<string>('');
  const [delivery, setDelivery] = React.useState<string>('');
  const [buyerAddress, setBuyerAddress] = React.useState({
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const deliveryOptions = [
    { label: 'Select', value: '' },
    { label: 'Delivery', value: 'delivery' },
    { label: 'Pickup', value: 'pickup' },
  ];

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const config = {
      method: 'POST',
      url: 'https://badin-mulch.vercel.app/api/purchase',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        buyerEmail,
        buyerName,
        buyerPhone,
        city: buyerAddress.city,
        delivery,
        quantity,
        state: buyerAddress.state,
        street: buyerAddress.street,
        zip: buyerAddress.zip,
      },
    };
    axios(config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setBuyerAddress({
      street: '',
      city: '',
      state: '',
      zip: '',
    });
    setBuyerName('');
    setBuyerPhone('');
    setBuyerEmail('');
    setDelivery('');
    setQuantity(0);
    setDelivery('');
  };

  const handleBuyerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyerName(e.target.value);
  };

  const handleBuyerPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyerPhone(e.target.value);
  };

  const handleBuyerEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyerEmail(e.target.value);
  };

  const handleDeliveryChange = (e: any) => {
    setDelivery(e.target.value);
  };

  const handleBuyerAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuyerAddress({
      ...buyerAddress,
      [e.target.name]: e.target.value,
    });
  };
  const handleOpenPricing = () => setOpenPricing(!openPricing);
  const handleOpenDelivery = () => setOpenDelivery(!openDelivery);
  const handleOpenMulchInfo = () => setOpenMulchInfo(!openMulchInfo);

  return (
    <div className="p-2">
      <h1 className="h1 w-100">2023 Badin Baseball Annual Mulch Sale</h1>
      <p className="h5">Order for {playerName}</p>
      <div className="m2">
        <Button
          className="btn btn-success"
          onClick={handleOpenPricing}
          style={{ margin: '6px' }}
          aria-controls="example-collapse-text"
          aria-expanded={openPricing}
        >
          Pricing Infomation
        </Button>
        <Collapse in={openPricing}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Pricing</Card.Title>
              <div>
                <ul>
                  <li>Comes in increments of 5</li>
                  <li>$6.00 per bag</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Collapse>
        <Button
          className="btn btn-success"
          onClick={handleOpenDelivery}
          style={{ margin: '6px' }}
          aria-controls="example-collapse-text"
          aria-expanded={openDelivery}
        >
          Delivery Infomation
        </Button>
        <Collapse in={openDelivery}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Delivery</Card.Title>

              <div>
                <ul>
                  <li>
                    Free Delivery with purchase of 10 bag or more within 15
                    miles of Badin High School
                  </li>
                  <li>
                    For Free Delivery over 15 miles minimum order is 50 bags
                  </li>
                  <li>Delivery is between March 18 and March 19</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Collapse>
        <Button
          className="btn btn-success"
          onClick={handleOpenMulchInfo}
          aria-controls="example-collapse-text"
          style={{ margin: '6px' }}
          aria-expanded={openMulchInfo}
        >
          Mulch Information
        </Button>
        <Collapse in={openMulchInfo}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Mulch</Card.Title>

              <div>
                <ul>
                  <li>
                    Triple Shredded, Triple Dyed, All Hardwood Premium Black
                    Mulch
                  </li>
                  <li>1 bag is equivalent to 2 cubic feet</li>
                  <li> Approximately 13 bags represent 1 Yard of Mulch.</li>
                  <li>
                    The average house needs between 4-5 yards or 40-50 bags.
                  </li>
                </ul>
              </div>
              <div>
                - Square Footage X desired depth / 324 = cubic yards needed
              </div>
            </Card.Body>
          </Card>
        </Collapse>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={buyerName}
            onChange={handleBuyerNameChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone"
            value={buyerPhone}
            onChange={handleBuyerPhoneChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={buyerEmail}
            onChange={handleBuyerEmailChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="range"
            min="5"
            max="100"
            step="5"
            value={quantity}
            className="form-range mb-3"
            onChange={handleQuantityChange}
            required
          />
          <Form.Text className="text-success">{quantity} bags</Form.Text>
        </Form.Group>
        <div>
          <label htmlFor="delivery" className="form-label mt-2">
            Delivery Option
          </label>
          <select
            className="form-select"
            aria-label="Select Delivery Option"
            name='delivery'
            id='delivery'
            value={delivery}
            onChange={handleDeliveryChange}
            required
          >          
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path 
                fillRule="evenodd" 
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>          
            <option value="">Select</option>
            <option value="delivery">Delivery</option>
            <option value="pickup">Pickup</option>
          </select>
        </div>
        {delivery === 'delivery' ? (
          <div className="mb-2">
            <Form.Group controlId="formBasicStreet">
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter street"
                name="street"
                value={buyerAddress.street}
                onChange={handleBuyerAddressChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="city"
                value={buyerAddress.city}
                onChange={handleBuyerAddressChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state"
                name="state"
                value={buyerAddress.state}
                onChange={handleBuyerAddressChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter zip"
                name="zip"
                value={buyerAddress.zip}
                onChange={handleBuyerAddressChange}
              />
            </Form.Group>
          </div>
        ) : (
          <Card style={{ width: '24rem', margin: '16px', padding: '2px' }}>
            <Card.Title>Badin Address</Card.Title>
            <Card.Body>
              <Card.Text>571 New London Rd, Hamilton, OH 45013</Card.Text>
            </Card.Body>
          </Card>
        )}
        <div className="d-grid gap-2">
        <Button
          variant="success"
          type="submit"
          size='lg'
        >
          Submit
        </Button>
        </div>
      </Form>
    </div>
  );
}
