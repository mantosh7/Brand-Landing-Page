const divStyle = {
    boxShadow: "0px 2px 8px rgba(0,0,0,0.2)", 
    borderRadius: 13,
    height:200 ,
    backgroundColor:"white"
}

const iconStyle= {
    borderRadius:5, 
    backgroundColor:"#e6e3e3ff",
    margin:15, 
    padding:5
}

const nestedDiv1 = {
    margin:15, 
    marginTop:5, 
    fontWeight:600,
    fontSize:"smaller"
}

const nestedDiv2 = {
    padding:15, 
    fontSize:"smaller", 
    color:"#7c7c7cff",
    fontSize:"small"
}

export default function SecondComponent() {
    return <div style={{backgroundColor:"#fcfafa",height: 750, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

        <div>
            <h1>Everything You Need To Succeed</h1>
        </div>
        
        <div style={{ width: 300, marginTop: -25, color: "#7c7c7cff", textAlign: "center", fontSize:"smaller" }}>
            <p>Powerful features designed to help you build, grow, and scale your business.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, auto)", height: "60vh", width: "60vw", gap: 20, marginTop: 50 }}>

            <div style={divStyle}>
                <div className="material-symbols-sharp" style={iconStyle}> bolt </div>
                <div style={nestedDiv1}>Lightning Fast</div>
                <div  style={nestedDiv2}>Built for speed and performance. Experience blazing fast load times and seamless interactions.</div>
            </div>

            <div style={divStyle}>
                <div className="material-symbols-sharp" style={iconStyle}> shield </div>
                <div style={nestedDiv1}>Secure & Reliable</div>
                <div  style={nestedDiv2}>Enterprise-grade security with 99.9% uptime guarantee. Your data is safe with us.</div>
            </div>

            <div style={divStyle}>
                <div className="material-symbols-sharp" style={iconStyle}> group </div>
                <div style={nestedDiv1}>Team Collaboration</div>
                <div  style={nestedDiv2}>Work together seamlessly with real-time collaboration tools and shared workspaces.</div>
            </div>

            <div style={divStyle}>
                <div className="material-symbols-sharp" style={iconStyle}> rocket_launch </div>
                <div style={nestedDiv1}>Easy to Scale</div>
                <div  style={nestedDiv2}>Grow from startup to enterprise. Our platform scales with your business needs.</div>
            </div>

            <div style={divStyle}>
                <div className="material-symbols-sharp" style={iconStyle}> schedule </div>
                <div style={nestedDiv1}>24/7 Support</div>
                <div  style={nestedDiv2}>Round-the-clock customer support to help you succeed. We're here when you need us.</div>
            </div>

            <div style={divStyle}>
                <div className="material-symbols-sharp" style={iconStyle}> favorite </div>
                <div style={nestedDiv1}>Loved by Users</div>
                <div  style={nestedDiv2}>Join thousands of happy customers who rate us 4.9/5 stars for excellence.</div>
            </div>

        </div>

    </div>
}