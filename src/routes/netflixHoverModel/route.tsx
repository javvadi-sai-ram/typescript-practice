import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import EachHover from './EachHover'

const imgQty = 18

@observer
class HoverModel extends React.Component {
  @observable numbers: Array<any> = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ]

  min = 1
  max = 100

  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {this.numbers.map(num => {
          return (
            <EachHover key={num} num={Math.floor(Math.random() * 100) + 1} />
          )
        })}
      </div>
    )
  }
}

export default HoverModel
