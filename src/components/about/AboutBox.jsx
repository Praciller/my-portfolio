import React from 'react'

function AboutBox() {
  return (
    <div className="abount__boxes grid">
        <div className="abount__box">
            <i className="abount__icon icon-fire"></i>

            <div>
                <h3 className="abount__title">27</h3>
                <span className="abount__subtitle">Repositories in Github</span>
            </div>
        </div>

        <div className="abount__box">
            <i className="abount__icon icon-cup"></i>

            <div>
                <h3 className="abount__title">249</h3>
                <span className="abount__subtitle">Cup of coffee</span>
            </div>
        </div>

        <div className="abount__box">
            <i className="abount__icon icon-people"></i>

            <div>
                <h3 className="abount__title">4</h3>
                <span className="abount__subtitle">Project completed</span>
            </div>
        </div>

        <div className="abount__box">
            <i className="abount__icon icon-badge"></i>

            <div>
                <h3 className="abount__title">28</h3>
                <span className="abount__subtitle">Certification</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox