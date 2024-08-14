import React, { useContext } from 'react'
import'./main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
function Main() {
    const{ 
       
        onSent,
       
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input,}=useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}/>
        </div>
      <div className="main-container">
        {!showResult ?
        <>
        <div className="greet">
            <p><span>Hello,dev</span></p>
            <p>How Can I Help You Today</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>
                  Ask your question
                </p>
                <img src={assets.compass_icon}/>
            </div>
            <div className="card">
                <p>
                   breif summerize to concept
                </p>
                <img src={assets.bulb_icon}/>
            </div>
            <div className="card">
                <p>
                  brainstrome is a big health issue
                </p>
                <img src={assets.message_icon}/>
            </div>
            <div className="card">
                <p>Developer Issue
                </p>
                <img src={assets.code_icon}/>
            </div>
        </div>
        </> : <div className='result'>
            <div className="result-item">
                <img src={assets.user_icon}/>
                <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div> :
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    </div></div>}
       
        <div className="main-bottm">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} 
                value={input} type="text" placeholder='Enter Your Thought' />
              <div>
              <img src={assets.gallery_icon}/>
                <img src={assets.mic_icon} alt="" />
                <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
              </div>
            </div>
            <p className='bottom-info'>gemini  may display inaccurte info, including about people</p>
        </div>
      </div>
    </div>
  )
}

export default Main
