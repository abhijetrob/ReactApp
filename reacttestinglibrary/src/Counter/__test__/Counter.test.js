import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect"

test("header renders correctelly with correct text", () => {
//const copmonent = render(<Counter />); 
//const headerEl = copmonent.getByTestId("header");

const {getByTestId} = render(<Counter />); 
const headerEl = getByTestId("header");

expect(headerEl.textContent).toBe("My Counter")
})

test("Counter initally start with text 0", () => {
const {getByTestId} = render(<Counter />);
const CounterEl = getByTestId("counter");

expect(CounterEl.textContent).toBe("0");
})

test("input conataine initial value 1", () => {
const {getByTestId} = render(<Counter />);
const inputEl = getByTestId("input");

expect(inputEl.value).toBe("1");
})

test("add button render with +", () => {
const {getByTestId} = render(<Counter />);
const addBtnEl =getByTestId("addbtn");

expect(addBtnEl.textContent).toBe("+");
})

test("Subtract button render with -", () => {
    const {getByTestId} = render(<Counter />);
    const subBtnEl =getByTestId("subbtn");
    
    expect(subBtnEl.textContent).toBe("-");
})

test("change value of input work correctely", () => {
    const {getByTestId} = render(<Counter />);
    const inputEl = getByTestId("input");
    
    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });
    expect(inputEl.value).toBe("5");
})

test("clicking on + button add 1 to counter", () =>{
    const {getByTestId} = render(<Counter />);
    const addBtnEl =getByTestId("addbtn");
    const counterEl =getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe("1");
})


test("clicking on - button add 1 to counter", () =>{
    const {getByTestId} = render(<Counter />);
    const subBtnEl =getByTestId("subbtn");
    const counterEl =getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(subBtnEl);

    expect(counterEl.textContent).toBe("-1");
    })


    test("clicking input value and clicking on add value work correctely", () =>{
        const {getByTestId} = render(<Counter />);
        const addBtnEl =getByTestId("addbtn");
        const counterEl =getByTestId("counter");
        const inputEl =getByTestId("input");

        fireEvent.change(inputEl, {
            target: {
                value:"5"
            }
        })
    
        fireEvent.click(addBtnEl);
    
        expect(counterEl.textContent).toBe("5");
    })

    test("clicking input value and clicking on add value work correctely", () =>{
        const {getByTestId} = render(<Counter />);
        const subBtnEl =getByTestId("subbtn");
        const counterEl =getByTestId("counter");
        const inputEl =getByTestId("input");

        fireEvent.change(inputEl, {
            target: {
                value:"5"
            }
        })
    
        fireEvent.click(subBtnEl);
    
        expect(counterEl.textContent).toBe("-5");
    })

    test("adding and subtracting leades to a correct counter number", () =>{
        const {getByTestId} = render(<Counter />);
        const subBtnEl =getByTestId("subbtn");
        const addBtnEl =getByTestId("addbtn");
        const counterEl =getByTestId("counter");
        const inputEl =getByTestId("input");

        fireEvent.change(inputEl, {
            target: {
                value:"10"
            }
        })
        fireEvent.click(addBtnEl);
        fireEvent.click(addBtnEl);
        fireEvent.click(addBtnEl);
        fireEvent.click(addBtnEl);
        fireEvent.click(subBtnEl);
        fireEvent.click(subBtnEl);
    
        expect(counterEl.textContent).toBe("20");

        fireEvent.change(inputEl, {
            target: {
                value:"5"
            }
        })
        fireEvent.click(addBtnEl);
        fireEvent.click(subBtnEl);
        fireEvent.click(subBtnEl);

        expect(counterEl.textContent).toBe("15");
    })

    test("counter cointain correct class naem", ()=>{
        const {getByTestId} = render(<Counter />);
        const subBtnEl =getByTestId("subbtn");
        const addBtnEl =getByTestId("addbtn");
        const counterEl =getByTestId("counter");
        const inputEl =getByTestId("input");

        expect(counterEl.className).toBe("");

        fireEvent.change(inputEl, {
            target: {
                value:"50"
            }
        })

        fireEvent.click(addBtnEl);

        expect(counterEl.className).toBe("");

        fireEvent.click(addBtnEl);
        expect(counterEl.className).toBe("green");
        fireEvent.click(addBtnEl);
        expect(counterEl.className).toBe("green");

        fireEvent.click(subBtnEl);
        fireEvent.click(subBtnEl);
        expect(counterEl.className).toBe("");

        fireEvent.click(subBtnEl);
        fireEvent.click(subBtnEl);
        fireEvent.click(subBtnEl);
        fireEvent.click(subBtnEl);
        expect(counterEl.className).toBe("red");




    })