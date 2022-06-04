import styledComponents from "styled-components";

const Button = styledComponents.button`
  display: flex;
  align-items: center;
  padding: .5rem 1rem;
  border: none;
  border-radius: .4rem;
  cursor: pointer;
  transition: opacity .2s;
  &:hover {
    opacity: .7;
  }
`
const GreyButton = styledComponents(Button)`
  border: 1px solid lightgrey;
`
const BlueButton = styledComponents(Button)`
  background-color: rgb(88, 92, 204);
  color: white;
`
const OreangeButton = styledComponents(Button)`
  background-color: rgb(244, 101,36);
  color: white;
`
const RoundGreyButton = styledComponents(GreyButton)`
  justify-content: center;
  padding: .5rem;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
`
export {Button, GreyButton, RoundGreyButton, BlueButton, OreangeButton}