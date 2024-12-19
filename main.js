import React from "react";
import ReactDOM from "react-dom/client";

const mainRoot = document.getElementById("root");
const mainDom = ReactDOM.createRoot(mainRoot);

const LogoComponent = function () {
    return <a href="#"><img src="https://img.freepik.com/premium-vector/phone-logo-smartphone-icon_701361-965.jpg" alt="Logo" className="logo" /></a>
};

const MainTitle = function(){
    return(
        <div className="main-title">
            <h2 id="title1">Surf</h2>
            <h2 id="title2">Mobiles</h2>
        </div>
    );
}

const MenuComponent = function () {
    return (
        <nav>
            <ul className="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

const HeaderComponent = function () {
    return (
        <header className="header">
            <LogoComponent />
            <MainTitle/>
            <MenuComponent />
        </header>
    );
};

const PhoneImg = function () {
    return (
        <div className="phone-img">
            <img
                src="https://motorolain.vtexassets.com/arquivos/ids/159161-1200-auto?width=1200&height=auto&aspect=true"
                height="200"
                alt="Phone"
            />
        </div>

    );
}

const PhoneData = function () {
    return (
        <div className="phone-data">
            <h3>Motorola Razr 50</h3>
            <h4>4/5 Stars</h4>
            <h4>₹54,999</h4>
        </div>
    );
}

const PhoneCard = function () {
    return (
        <div className="phone-card">
            <PhoneImg />

            <PhoneData />
        </div>
    );
};

const BodyComponent = function () {
    return (
        <div className="body-container">
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
        </div>
    );
};

const FooterComponent = function () {
    return (
        <div id="main-footer">
            <p>SurfMobiles, Copyright &copy; 2024</p>
        </div>)
}

const App = function () {
    return (
        <>
            <HeaderComponent />

            <BodyComponent />

            <FooterComponent />
        </>
    );
};

mainDom.render(<App />);
