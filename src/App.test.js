import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('My Calculator Test Suite', () =>{

  test('Test Case-1[Render All UI]',()=>{
    render(<App/>);
    const textBox1 = screen.getByTestId('TextBox1');
    const textBox2 = screen.getByTestId('TextBox2');
    const additionButton = screen.getByTestId('AdditionButton');

    expect(textBox1).toBeInTheDocument();
    expect(textBox2).toBeInTheDocument();
    expect(additionButton).toBeInTheDocument();
  });

  test('Test Case-2[Render All Labels and Text Message]',()=> {
    render(<App/>);
    const heading = screen.getByTestId("Heading");
    const label1 = screen.getByTestId("Label1");
    const label2 = screen.getByTestId("Label2");
    const result = screen.getByTestId("Result");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Addition of Two Numbers");

    expect(label1).toBeInTheDocument();
    expect(label1).toHaveTextContent("Enter Number 1 :");

    expect(label2).toBeInTheDocument();
    expect(label2).toHaveTextContent("Enter Number 2 :");

    expect(result).toBeInTheDocument();
    expect(result).toHaveTextContent("Sum :");

  });

  test('Test Case-3 [Testing Texboxes Initial Value]',() =>{
    render(<App/>);
    const textBox1 = screen.getByTestId("TextBox1");
    const textBox2 = screen.getByTestId("TextBox2");
    expect(textBox1).toHaveTextContent('');
    expect(textBox2).toHaveTextContent('');
  });

  test('Test Case-4 [Testing Empty or Blank Input]', () => {
    render(<App/>);
    const additionButton = screen.getByTestId("AdditionButton");

    fireEvent.click(additionButton);

    const result = screen.getByTestId("Result");
    expect(result).toHaveTextContent("Sum : NaN");
  });

  test('Test Case-5 [Testing Success Result]', () => {
    render(<App/>);
    const textBox1 = screen.getByTestId("TextBox1");
    const textBox2 = screen.getByTestId("TextBox2");
    const additionButton = screen.getByTestId("AdditionButton");

    fireEvent.change(textBox1, {target : {value : 10 } } );
    fireEvent.change(textBox2, {target : {value : 20 } } );

    fireEvent.click(additionButton);

    const result = screen.getByTestId("Result");

    expect(result).toHaveTextContent("Sum : 30");
  });

});






















// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });






// describe('My Test Suite', () =>{
//   test('Test Case-1', () => {
//     render(<App/>);
//     //var text1 = screen.getByText('Welcome to JEST Demo with React');
//     var element1 = screen.getByTestId("MyHeading");
//     //expect(element1).toBeInTheDocument();
//     expect(element1).toHaveTextContent('Welcome to JEST Demo with React');
//   }) ;
  
//   it('Test Case-2', () =>{
//     render(<App/>);
//     const text2 = screen.getByText('Hello..This is Nithu !');
//     expect(text2).toBeInTheDocument();
//   })
// });