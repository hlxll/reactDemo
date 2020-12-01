import React,{ Component } from "react";
class Bar extends Component{
  constructor(props){
    super(props)
    this.state = {
      yuanHeight : 10,
      dataArr : [
          {
              x: 160,
              y: 190,
              yuanHeight: 900
          },
          {
              x: 160,
              y: 590,
              yuanHeight: 1500
          }
      ]
    }
    this.canvasZero = this.canvasZero.bind(this)
  }
  canvasZero = (canvasId ,dataArr , allHeightColor, allColor, textContent, betweenColor, CanvaOpacity, yuanHeight) =>{
    console.log(canvasId)
    console.log(dataArr)
    console.log(allHeightColor)
    console.log(allColor)
    console.log(textContent)
    console.log(betweenColor)
    console.log(CanvaOpacity)
    console.log(yuanHeight)
  }
  componentDidMount(){
    const canvasId = this.$refs.barCanvas
    const closeTimeOut = setInterval(()=>{
      this.canvasZero(canvasId, this.state.dataArr, 'rgb(255, 255, 0)', 'rgb(255, 215, 0)', '7000', 'rgb(255, 193, 37)', 'rgba(255, 255, 0, 0.2)', this.state.yuanHeight)
      if(this.state.yuanHeight>=100){
          clearInterval(closeTimeOut)
      }
      this.setState((prev, props)=>{
        return {
          yuanHeight: prev.yuanHeight + 10
        }
      })
  },100)
  }


  render(){
    return(
      <div>
          <canvas id="barCanvas" ref="barCanvas">
            不支持canvas
          </canvas>
      </div>
    )
  }
}
export default Bar;
