import React, { Component } from 'react'
import styled from '@emotion/styled/macro'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

const EachImage = styled.div`
  margin: 10px;
  align-self: center;
  text-align: center;
  width: 200px;
  /* border: 5px solid #333; */
  transition-duration: 5s;
  &:hover {
    width: 250px;
  }
`

const HoverImage = styled.img`
  margin: 10px;
  width: 150;
  height: 200;
  background-color: dodgerblue;
  display: inline-block;
  margin: 2;
  border: 5px solid #333;
  border-radius: 4;
  box-sizing: border-box;

  ${EachImage}:hover & {
    transition-duration: 5s;
    width: 220px;
  }
`

interface EachHoverProps {
  num: number
}

@observer
class EachHover extends Component<EachHoverProps> {
  @observable detailsView: boolean = false

  setDetails = () => {
    if (this.detailsView === false) {
      this.detailsView = true
    } else {
      this.detailsView = false
    }
  }

  render() {
    return (
      <EachImage onMouseEnter={this.setDetails} onMouseLeave={this.setDetails}>
        <HoverImage
          src={`https://unsplash.it/150/200?image=${this.props.num}`}
        />
      </EachImage>
    )
  }
}

export default EachHover
