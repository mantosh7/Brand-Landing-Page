const newFeature = {
    height: 24,
    width: 165,
    borderRadius: 13,
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    fontWeight: 600,
    fontSize: "x-small",
    backgroundColor: "#eceaeaff",
    color: "#4d4c4cff"
}

const somethingAmazing = {
    fontSize: "x-large"
}

const buttonStyle = {
    height: 30,
    width: 160,
    border: "none",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    borderRadius: 7,
    display: "flex",             
    alignItems: "center",        
    justifyContent: "center", 
    gap: 5
}


export default function Header() {
    return <div style={{ height: 500, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={newFeature}>
            🎉 New features available now
        </div>

        <div style={somethingAmazing}>
            <h1>Build Something Amazing</h1>
        </div>

        <div style={{ width: 540, marginTop: -30, color: "#7c7c7cff" }}>
            <p>Transform your ideas into reality with our powerful platform. Join thousands of creators who trust us to bring their vision to life.</p>
        </div>

        <div style={{ marginTop: 20, width: 400, display: "flex", gap: 20, justifyContent: "center" }}>
            <button style={buttonStyle}>Get Started Free<span className="material-symbols-sharp" style={{margin:5}}>
                arrow_right_alt
            </span></button>
            <button style={buttonStyle}><span class="material-symbols-rounded" style={{marginLeft:-15}}>
play_arrow
</span>Watch Demo</button>
        </div>

        <div style={{ color: "#7c7c7cff", fontSize: "x-small", marginTop: 30 }}>
            <p>Trusted by 50,000+ creators worldwide</p>
        </div>

        <div style={{ width: 500, display: "flex", justifyContent: "space-evenly", color: "#7c7c7cff", fontWeight: 600, fontSize: "small" }}>
            <div className="div">Company A</div>
            <div className="div">Company B</div>
            <div className="div">Company C</div>
            <div className="div">Company D</div>
        </div>
    </div>
} 