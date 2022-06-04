import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext } from "react"
import styledComponents from "styled-components"
import { RoundGreyButton } from "./buttons"

// Context
const ModalContext = React.createContext()

// Styled components
const Wrapper = styledComponents.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 2;
`
const Window = styledComponents.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: .5rem;
  padding: 1rem;
`
const CloseButton = styledComponents(RoundGreyButton)`
  position: absolute;
  top: 1 rem;
  right: 1rem;
`

// React component
function Modal() {
  const modal = useContext(ModalContext)
  return (modal.opened &&
    <Wrapper onClick={modal.openClose}>
      <Window onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={modal.openClose}>
          <FontAwesomeIcon icon={faClose}/>
        </CloseButton>
        {modal.content}
      </Window>
    </Wrapper>
  )
}

export {Modal, ModalContext}