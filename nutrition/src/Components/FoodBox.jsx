import React, { Component } from 'react'
import './Foodbox.css'

export default class FoodBox extends Component {

    constructor(){
        super()
        this.state = {
          countNo:0,
          countCals:0
        }
      }

  render() {
    let {countNo, countCals} = this.state

    let handleQuantity = (event)=>{
        this.setState({countNo:event.target.value})
    }

    let handleCalories =()=>{
        this.setState({countCals:this.props.cal*countNo})
    }

    let handleReset =()=>{
        this.setState({countNo:0})
        this.setState({countCals:0})
    }
    return (
      <>
        <div className="box">

            <article className="media">

                <div className="media-left">

                    <figure className="image is-64x64">
                        <img src={this.props.img} width={"100px"}/>
                    </figure>

                </div>

                <div className="media-content">

                    <div className="content">
                        <p>
                        <strong>{this.props.name}</strong> <br/>
                        <small>{this.props.cal}</small>
                        </p>
                    </div>

                </div>

                <div className="media-right">

                    <div className="field has-addons">

                        <div className="control">
                            <input className="input" type="number" placeholder='Enter the number' onChange={handleQuantity}/>
                        </div>

                        <div className="control">
                            <button className="button is-info" onClick={handleCalories}>
                                +
                            </button>
                        </div>

                    </div>

                </div>
                
            </article>

            <div>
                <h2>
                    {countNo} {this.props.name} = {countCals} Calories
                </h2>
            </div>

            <div>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
      </>
    )
  }
}
