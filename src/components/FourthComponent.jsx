const inputStyle={
    width:200,
    borderRadius: 7,
    border:"1px solid gray",
    padding:8,
    height:13
}

const btnStyle= {
    width:160,
    borderRadius: 7,
    border:"1px solid gray",
    padding:8,
    height:30,
    display: "flex",            
    alignItems: "center",        
    justifyContent: "center",   
    gap: 5
}

const bottomStyle1 = {
    height:40, 
    fontSize:"x-large", 
    display:"flex", 
    justifyContent:"center", 
    alignItems:"center",
    fontWeight:700
}

const bottomStyle2 = {
    fontSize:"x-small", 
    display:"flex", 
    justifyContent:"center", 
    alignContent:"center",
    color: "#c8c3c3ff",
    fontWeight:600
}

export default function FourthComponent()
{
    return <div style={{backgroundColor:"black",height: 400, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div>
            <h1 style={{color:"white"}}>Ready to Get Started?</h1>
        </div>

        <div style={{ width: 450, marginTop: -15, color: "#c8c3c3ff", textAlign: "center", fontSize:"smaller"}}>
            <p>Join thousands of teams already using our platform to build amazing products. Start your free trial today—no credit card required.</p>
        </div>

        <div style={{height:30, width:500, marginTop:15, display:"flex", justifyContent:"center", alignContent:"center", gap:15}}>
            <input type="text" placeholder="Enter your email" style={inputStyle} />
            <button style={btnStyle}>Start Free Trial<span className="material-symbols-sharp" style={{margin:5}}>
                arrow_right_alt
            </span></button>
        </div>

        <div style={{ color: "#c8c3c3ff", fontSize: "x-small", marginTop: 10 }}>
            <p>Free 14-day trial • No credit card required • Cancel anytime</p>
        </div>

        <div style={{width:550, height:60, color:"white", display:"flex", justifyContent:"space-around", alignContent:"center", marginTop:35}}>
            <div>
                <div style={bottomStyle1}>50K+</div>
                <div style={bottomStyle2}>Active Users</div>
            </div>

            <div>
                <div style={bottomStyle1}>99.9%</div>
                <div style={bottomStyle2}>Uptime</div>
            </div>

            <div>
                <div style={bottomStyle1}>4.9/5</div>
                <div style={bottomStyle2}>User Rating</div>
            </div>
        </div>
    </div>
}