import React from "react";
import { CubicYards } from "@/lib/cubicYards";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//width: number, length: number, height: number
export default function CubicFeet() {
    const [show, setShow] = React.useState<boolean>(false);
    const [width, setWidth] = React.useState<number>(0);
    const [length, setLength] = React.useState<number>(0);
    const [height, setHeight] = React.useState<number>(0);

    const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWidth(Number(event.target.value));
    };
    const handleLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLength(Number(event.target.value));
    };

    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(Number(event.target.value));
    };

    const handleModelStatus = () => setShow(!show);

    function calculateAll() {
        const squareFeet = width * length;
        const cubicYards = squareFeet * height;
        return cubicYards;
    }
    const handleCalculation = calculateAll();

    const handleRestAll = () => {
        setWidth(0);
        setLength(0);
        setHeight(0);
    };



  return (
    <>
        <Button className="btn btn-success" onClick={handleModelStatus}>
            Calculate Bags
        </Button>
        {show ? (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Calculate How Many Bags</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="mb-3 mt-2 fs-6 text-success">
                Enter Totals in Feet
            </div>
            <div className="form-group">
                <label htmlFor="width">Width</label>
                <input
                    type="number"
                    className="form-control"
                    id="width"
                    placeholder="Width"
                    value={width}
                    onChange={handleWidthChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="length">Length</label>
                <input
                    type="number"
                    className="form-control"
                    id="length"
                    placeholder="Length"
                    value={length}
                    onChange={handleLengthChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="height">Height</label>
                <input
                    type="number"
                    className="form-control"
                    id="height"
                    placeholder="Height"
                    value={height}
                    onChange={handleHeightChange}
                    required
                />
            </div>
            <div className="mb-3 mt-2 fs-5 text-success">
                {`${handleCalculation} cubic yards`}
            </div>


        </Modal.Body>

        <Modal.Footer>
            <Button variant="danger" onClick={handleRestAll}>Reset</Button>
          <Button variant="secondary" onClick={handleModelStatus}>Close</Button>
          <Button variant="success" onClick={calculateAll}>Calculate</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    ) : null}
    </>
  );
}

