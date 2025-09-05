const divStyle = {
    boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
    borderRadius: 13,
    height: 200,
    backgroundColor: "white"
}

const nestedDiv1 = {
    marginTop: -15,
    padding: 15,
    fontSize: "smaller",
    color: "#7c7c7cff",
    fontSize: "small"
}

const nestedDiv2 = {
    height: 40,
    width: 40,
    borderRadius: "50%",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    marginRight: 10,
    fontSize:"small"
}

export default function ThirdComponent() {
    return <div style={{ height: 750, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

        <div>
            <h1>Loved by Teams Worldwide</h1>
        </div>

        <div style={{ marginTop: -25, color: "#7c7c7cff", textAlign: "center", fontSize: "smaller" }}>
            <p>Don't just take our word for it. See what our customers have to say.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, auto)", height: "60vh", width: "60vw", gap: 20, marginTop: 50 }}>

            <div style={divStyle}>
                <div style={{ marginTop: 30, marginLeft: 6, padding: 5 }}>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                </div>

                <div style={nestedDiv1}><i>"This platform has completely transformed how we work. The features are intuitive and powerful, exactly what we needed to scale our business."</i></div>

                <div style={{ display: "flex", alignItems: "center", margin: 10 }}>
                    <div style={nestedDiv2}> SJ </div>

                    <div>
                        <div style={{fontSize: "small",  fontWeight: "bold" }}>David Park</div>
                        <div style={{marginTop:3,  fontSize: "x-small", color: "gray" }}>Founder, GrowthLab</div>
                    </div>
                </div>

            </div>

            <div style={divStyle}>
                <div style={{ marginTop: 30, marginLeft: 6, padding: 5 }}>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                </div>

                <div style={nestedDiv1}><i>"Outstanding support and reliability. We've been using this for over a year and it's been flawless. Highly recommend to any growing team."</i></div>

                <div style={{ display: "flex", alignItems: "center", margin: 10}}>
                    <div style={nestedDiv2}> MC </div>

                    <div>
                        <div style={{fontSize: "small",  fontWeight: "bold" }}>Michael Chen</div>
                        <div style={{marginTop:3, fontSize: "x-small", color: "gray" }}>Product Manager, InnovateCorp</div>
                    </div>
                </div>

            </div>

            <div style={divStyle}>
                <div style={{ marginTop: 30, marginLeft: 6, padding: 5 }}>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                </div>

                <div style={nestedDiv1}><i>"The user experience is fantastic. Clean, modern, and everything just works as expected. It's rare to find software this well-designed."</i></div>

                <div style={{ display: "flex", alignItems: "center", margin: 10 }}>
                    <div style={nestedDiv2}> ER </div>

                    <div>
                        <div style={{fontSize: "small",  fontWeight: "bold" }}>Emma Rodriguez</div>
                        <div style={{ marginTop:3, fontSize: "x-small", color: "gray" }}>Designer, CreativeStudio</div>
                    </div>
                </div>
            </div>

            <div style={divStyle}>
                <div style={{ marginTop: 30, marginLeft: 6, padding: 5 }}>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                </div>

                <div style={nestedDiv1}><i>"Game changer for our productivity. The collaboration features alone saved us hours every week. Best investment we've made this year."</i></div>

                <div style={{ display: "flex", alignItems: "center", margin: 10 }}>
                    <div style={nestedDiv2}> SJ </div>

                    <div>
                        <div style={{fontSize: "small",  fontWeight: "bold" }}>David Park</div>
                        <div style={{marginTop:3, fontSize: "x-small", color: "gray" }}>Founder, GrowthLab</div>
                    </div>
                </div>
            </div>

            <div style={divStyle}>
                <div style={{ marginTop: 30, marginLeft: 6, padding: 5 }}>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                </div>

                <div style={nestedDiv1}><i>"Incredible value for money. The feature set rivals platforms costing 3x more. Perfect for teams that want enterprise features without the price tag."</i></div>

                <div style={{ display: "flex", alignItems: "center", margin: 10 }}>
                    <div style={nestedDiv2}> LT </div>

                    <div>
                        <div style={{fontSize: "small",  fontWeight: "bold" }}>Lisa Thompson</div>
                        <div style={{marginTop:3, fontSize: "x-small", color: "gray" }}>Marketing Director, BrandCo</div>
                    </div>
                </div>
            </div>

            <div style={divStyle}>
                <div style={{ marginTop: 30, marginLeft: 6, padding: 5 }}>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                    <span className="material-symbols-rounded" style={{ color: "gold", fontSize: 20 }}>star</span>
                </div>

                <div style={nestedDiv1}><i>"Rock solid platform with excellent performance. Zero downtime in 8 months of usage. The technical team clearly knows what they're doing."</i></div>

                <div style={{ display: "flex", alignItems: "center", margin: 10 }}>
                    <div style={nestedDiv2}> AK </div>

                    <div>
                        <div style={{fontSize: "small",  fontWeight: "bold" }}>Alex Kumar</div>
                        <div style={{marginTop:3, fontSize: "x-small", color: "gray" }}>CTO, DevFlow</div>
                    </div>
                </div>
            </div>

        </div>

    </div>
}