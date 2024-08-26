import "@/app/players/style.css";

const page = () => {
  return (
    <main>
      <div className="fut-player-card">
        <div className="player-card-top">
          <div className="player-master-info">
            <div className="player-rating">
              <span>97</span>
            </div>
            <div className="player-position">
              <span>RW</span>
            </div>
            <div className="player-nation">
              <img
                src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg"
                alt="Argentina"
                draggable="false"
              />
            </div>
            <div className="player-club">
              <img
                src="/img/escudo-federal-futbol-club-sin-fondo.webp"
                alt="Federal Futbol Club"
                draggable="false"
              />
            </div>
          </div>
          <div className="player-picture">
            <img
              src="https://selimdoyranli.com/cdn/fut-player-card/img/messi.png"
              alt="Messi"
              draggable="false"
            />
            <div className="player-extra">
              <span>4*SM</span>
              <span>4*WF</span>
            </div>
          </div>
        </div>
        <div className="player-card-bottom">
          <div className="player-info">
            <div className="player-name">
              <span>MESSI</span>
            </div>
            <div className="player-features">
              <div className="player-features-col">
                <span>
                  <div className="player-feature-value">97</div>
                  <div className="player-feature-title">PAC</div>
                </span>
                <span>
                  <div className="player-feature-value">95</div>
                  <div className="player-feature-title">SHO</div>
                </span>
                <span>
                  <div className="player-feature-value">0</div>
                  <div className="player-feature-title">PAS</div>
                </span>
              </div>
              <div className="player-features-col">
                <span>
                  <div className="player-feature-value">99</div>
                  <div className="player-feature-title">DRI</div>
                </span>
                <span>
                  <div className="player-feature-value">35</div>
                  <div className="player-feature-title">DEF</div>
                </span>
                <span>
                  <div className="player-feature-value">68</div>
                  <div className="player-feature-title">PHY</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
